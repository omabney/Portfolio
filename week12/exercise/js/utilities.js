export function hide(element){
    element.classList.add('hide');
    
}

export function show(element){
    element.classList.remove('hide');

}

export function hideAll(elements){
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('hide');
    }
}

export function showAll(elements){
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hide');
    }
}
export function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

export const noImage = "'images/no-image.png'";
export const apiKey = "30dd60f5";
