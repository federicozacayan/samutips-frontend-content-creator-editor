export const editorHtml = `<div class="ui-editor">
    <textarea>Start...</textarea>
    <section>
        <input type="button" value="Duplicate" width="50%">
        <input type="button" value="Delete" width="50%">
        <input type="button" value="h1" width="33%">
        <input type="button" value="h2">
        <input type="button" value="p">
        <input type="button" value="html">
        <input type="button" value="css">
        <input type="button" value="js">
        <input type="button" value="gdscript">
        <input type="button" value="csharp">
        
        <input type="button" value="md">
        <input type="button" value="ImgUp">
        <input type="file" accept="image/png, image/jpeg" style="display:none">
        <!-- <input type="button" value="-">
        <input type="button" value="--"> -->
        <input type="number" class="lineNumber" placeholder="Line number">
        <!-- <input type="button" value="-1|On">
        <input type="button" value="-1|Off"> -->
        <input type="button" value="Upload_Json">
        <input type="file" accept="application/JSON" style="display:none">
        <input type="button" value="Download_Json">
        <hr>
        <input type="button" value="save">
        <!-- <input type="button" value="Download_Html">
        <input type="button" value="hide_show"> -->
    </section>
</div>
<style>
    .ui-editor {
        position: fixed;
        width: 30vw;
        min-height: 100vh;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        right: 0;
        color: white;
        padding: 10px;
        text-align: justify;
    }

    .ui-editor textarea {
        min-width: 100%;
        min-height: 25vh;
        background-color: rgba(255, 255, 255, .8);
    }

    .ui-editor input[type="button"],
    .ui-editor input[type="number"] {
        display: inline-block;
    }

    /*SELECTOR CURSOR NODE*/
    .node-selected::before {
        content: ' ';
        width: 50px;
        height: 5px;
        position: absolute;
        margin-left: -50px;
        background-color: red;
    }

    /*IMAGE FORMATER*/
    /* #container .image-container {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: white;
        padding: 1em;
    }

    #container img {
        max-width: 100%;
        object-fit: cover;
        box-shadow: 2px 2px 8px black;
    }
    #container > *{
        text-align: justify;
    } */
</style>`