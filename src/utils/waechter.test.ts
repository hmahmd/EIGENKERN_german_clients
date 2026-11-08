import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  pseudonymizeDocument, 
  restoreIdentities, 
  validateInquiryForm, 
  DEFAULT_WAECHTER_MAPPINGS 
} from './waechter.js';

test('Wächter pseudonymization converts sensitive names to shadow copy', () => {
  const original = 'Akte Dr. Müller: Patientendaten und Interne Informationen.';
  const res = pseudonymizeDocument(original);

  assert.equal(res.original, original);
  assert.equal(res.pseudonymized, 'Akte Person A: Datensatz B und Information C.');
  assert.equal(res.mappings.length, 3);
  assert.equal(res.mappings[0].original, 'Dr. Müller');
  assert.equal(res.mappings[0].pseudonym, 'Person A');
});

test('Wächter restore maps anonymous tokens back to original identities', () => {
  const shadowResponse = 'Für Person A liegt in Datensatz B eine Empfehlung vor.';
  const restored = restoreIdentities(shadowResponse, DEFAULT_WAECHTER_MAPPINGS);

  assert.equal(restored, 'Für Dr. Müller liegt in Patientendaten eine Empfehlung vor.');
});

test('Form validation enforces required German business fields and email validity', () => {
  const emptyRes = validateInquiryForm({});
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.name);
  assert.ok(emptyRes.errors.company);
  assert.ok(emptyRes.errors.email);

  const validRes = validateInquiryForm({
    name: 'Dr. Martin Fischer',
    company: 'Fischer Steuerberatungsgesellschaft mbH',
    email: 'm.fischer@fischer-stb.de',
    industry: 'Steuerberater',
    deploymentType: 'local',
    privacyAccepted: true,
  });

  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);
});
