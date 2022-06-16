let disableScroll = false;
let startY = 0;

function isScrollable(e: HTMLElement | null, up: boolean): boolean {
    if (!e) return false;

    if (up && e.scrollTop + e.clientHeight < e.scrollHeight) {
        return true;
    }

    return e.scrollTop > 0;
}

function hasScrollableBase(e: HTMLElement | null, up: boolean) {
    while (e && e !== document.body) {
        e = e.parentNode as HTMLElement | null;
        if (isScrollable(e, up)) return true;
    }
    return false;
}

function onTouchStart(e: TouchEvent) {
    startY = e.touches[0].pageY;
    disableScroll = false;
}

function onTouchMove(e: TouchEvent) {
    const el =
        e.target instanceof HTMLElement ? (e.target as HTMLElement) : null;

    if (!el) {
        e.preventDefault();
        return false;
    }

    if (disableScroll || e.touches.length > 1) {
        e.preventDefault();
        return false;
    }

    const dy = e.touches[0].pageY - startY;


    if (hasScrollableBase(el, dy < 0)) return true;

    disableScroll = true;
    e.preventDefault();
    return false;
}


window.addEventListener("touchmove", onTouchMove, {
    passive: false,
});
window.addEventListener("touchstart", onTouchStart);