const BASE_PAGE_TITLE ='粗食屋 番風'
const SEPALATER = ' | '

export default class Utility {
    createPageTitle(title) {
        document.title = title + SEPALATER + BASE_PAGE_TITLE;
    }
    setHeadConfig(metaMap) {
        Object.keys(metaMap).forEach((nameAttr) => {
            var headEl = document.getElementsByTagName("head")[0];
            var metaEl = headEl.querySelector("meta[name='description']");
            if(!metaEl) {
                metaEl = document.createElement("meta");
                metaEl.setAttribute("name",nameAttr);
                headEl.appendChild(metaEl);
            }
            metaEl.setAttribute("content", metaMap[nameAttr]);
        })
    }
}