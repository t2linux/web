const meta = [
    {
        "name": "WLAN",
        "status": [
            {
                "name": "Working",
                "color": "#5fe874",
                "models": [
                    {
                        "device": "MacBook Pro",
                        "model": "2018 13\" (4 x )"
                    }
                ]
            },
            {
                "name": "Not working",
                "color": "#e85f5f",
                "models": [
                    {
                        "device": "MacBook Pro",
                        "model": "2020 13\""
                    }
                ]
            }
        ]
    },
    {
        "name": "Suspend",
        "status": [
            {
                "name": "Not working",
                "color": "#e85f5f",
                "models": ""
            }
        ]
    }
];

const tooltip = document.getElementById("tooltip");
let tooltipShown = false;

document.getElementById("devices").addEventListener("click", () => {
    if(tooltipShown) {
        tooltipShown = false;
    } else {
        tooltip.style.display = "none";
    }
});

console.log("Pre Computing model features... ")
console.time("Done")

Array.from(document.getElementById("devices").childNodes).filter(card => card.nodeName == "DIV").forEach(card => {
    card = card.getElementsByTagName("div")[0];
    const device = card.getElementsByTagName("h1")[0].innerText;

    Array.from(card.getElementsByTagName("p")).forEach(model => {
        let features = new Array();

        meta.forEach(feature => {
            feature.status.forEach(status => {
                if(typeof status.models == "string") {
                    features.push({
                        name: feature.name,
                        statusName: status.name,
                        statusColor: status.color
                    });
                } else {
                    status.models.filter(metaModel => JSON.stringify(metaModel) == JSON.stringify({ device: device, model: model.innerText })).forEach(() => {
                        features.push({
                            name: feature.name,
                            statusName: status.name,
                            statusColor: status.color
                        });
                    });
                }
            });
        });

        features = features.sort(feature => hexToHue(feature.statusColor));

        model.addEventListener("click", event => {
            if(features.length == 0) return;

            tooltip.innerHTML = "";

            features.forEach(feature => {
                const line = document.createElement("p");
                line.innerText = feature.name;
                line.title = feature.statusName;
                line.style.color = feature.statusColor;

                tooltip.appendChild(line);
            });

            tooltip.style.left = (model.offsetLeft + model.offsetWidth + 10) + "px";
            tooltip.style.top = (model.offsetTop) + "px";

            tooltip.style.display = "block";
            tooltipShown = true;
        });
    });
});

console.timeEnd("Done");

function hexToHue(H) {
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }

    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    return h;
}