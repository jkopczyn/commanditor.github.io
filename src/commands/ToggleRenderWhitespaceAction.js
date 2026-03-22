import * as monaco from "../monaco";
import {
    EditorAction,
    registerEditorAction,
} from "monaco-editor/esm/vs/editor/browser/editorExtensions";
import { ConfigController } from "../contributions/config";

export class ToggleRenderWhitespaceAction extends EditorAction {
    static ID = "commanditor.action.toggleRenderWhitespace";

    constructor() {
        super({
            id: ToggleRenderWhitespaceAction.ID,
            label: "Toggle Render Whitespace",
            alias: "Toggle Render Whitespace",
            precondition: undefined,
        });
    }

    run(accessor, editor) {
        const current = editor.getOption(
            monaco.editor.EditorOption.renderWhitespace
        );
        const newValue = current === "none" ? "all" : "none";
        ConfigController.get(editor).updateConfigValue(
            "renderWhitespace",
            newValue
        );
    }
}

registerEditorAction(ToggleRenderWhitespaceAction);
