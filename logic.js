setInterval(() => {
    d = new Date();
    dh = d.getHours();
    dm = d.getMinutes();
    ds = d.getSeconds();
    hrotation = 30 * dh + dm / 2;
    mrotation = 6 * dm;
    srotation = 6 * ds;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);