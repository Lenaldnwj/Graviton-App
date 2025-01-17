const { puffin } = require("@mkenzo_8/puffin")

function returnAbout(){
    const aboutSection = puffin.element(`
        <div>
            <gv-blocktitle>${getTranslation('About')} </gv-blocktitle>
            <gv-blockcontent>
                <p>${getTranslation('About-text1')}</p>
                <button class="button1" onclick="shell.openExternal('https://www.graviton.ml')">Website</button>
                <button class="button1" onclick="shell.openExternal('https://github.com/Graviton-Code-Editor/Graviton-App/')">Source Code</button>
                <button class="button1" onclick="shell.openExternal('https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/LICENSE.md')">License</button>
            </gv-blockcontent>
                <gv-blocktitle>${getTranslation('CurrentVersion')}</gv-blocktitle>
                <gv-blockcontent>
                <div id="about_section">
                    <p>${getTranslation('Version')}: ${GravitonInfo.version} (${GravitonInfo.date}) - ${GravitonInfo.state}</p>
                    <p>${getTranslation('OS')}: ${graviton.currentOS().name}</p>
                </div>
                <button class="button1" onclick="graviton.dialogChangelog();">${
                getTranslation('Changelog')
                }</button>
                <button class="button1" id="update_button_spectron" onclick="updater.checkUpdates();">${
                getTranslation('CheckUpdates')
                }</button>
            </gv-blockcontent>
        </div>
    `)
    return aboutSection
}



module.exports = returnAbout