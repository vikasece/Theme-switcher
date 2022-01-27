let themeSelector = localStorage.getItem('theme-selected');

var themes = ['normal','light','dark','orange','green'];
var themeDropDownEle = document.getElementById('themeSelector');

if(themeSelector == null) {
    themeSelector = themes[0];
    setPageTheme(themes[0]);
}

setPageTheme(themeSelector);

initThemeDropDown();

function initThemeDropDown(){
    themes.forEach(themeVal => {
        var option = document.createElement("option");
        option.text = themeVal;
        option.value = themeVal;
        themeDropDownEle.add(option); 
    });
    themeDropDownEle.value = themeSelector;
}

function onChangeThemeSeletor(){
    if(themes.includes(themeDropDownEle.value)){
        setPageTheme(themeDropDownEle.value);
    }
}


function setPageTheme(theme){
    const pageDomElement = document.documentElement;
    localStorage.setItem('theme-selected',theme);

    themes.forEach(themeVal => {

        if(!pageDomElement.classList.contains(themeVal) && theme == themeVal){
            pageDomElement.classList.add(themeVal);
        }
        else if(pageDomElement.classList.contains(themeVal)){
            pageDomElement.classList.remove(themeVal);
        }

    });
}