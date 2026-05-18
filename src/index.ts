/**
 * @amlplugins/ollama-models
 *
 * Thin namespaced re-export of the native ollama SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Ollama Models — list/pull/push/copy/delete local model registry; show model info and Modelfile.
 */

import * as _sdk from "ollama";
export * from "ollama";
export { _sdk as sdk };
export default _sdk;
