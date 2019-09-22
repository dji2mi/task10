const HomePage = require("./home_page/home_page");
const BasePage = require("./base_page/base_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "byLoad":
                return new byLoadPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;