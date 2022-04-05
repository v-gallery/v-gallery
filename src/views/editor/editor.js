import { html, render } from "../../lib.js";


const template = () => html`
<section id="editor">
    <h2>Editor</h2> 
    <div className="formContainer"  style="background: #red;">
        <form className="form">
            <label class="editor-label layout">
                <span class="label">Title:</span>
                <input type="text" name="title" class="input">
            </label>
            <label class="editor-label layout">
                <span class="label">Category:</span>
                <select type="text" name="category" class="input">
                    <option value="choose">Choose category</option>
                    <option value="mosaic">Mosaic</option>
                    <option value="painting">Painting</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <input type="submit" class="input" value="Save">
        </form>
    </div>    
</section>
`;

export async function editorPage(ctx) {
    ctx.render(template());
}