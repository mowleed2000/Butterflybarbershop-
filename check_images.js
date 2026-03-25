const https = require('https');

const urls = [
    'https://lh3.googleusercontent.com/aida/ADBb0ug59GGRNJj7zROkSu44M1IIRjvPMtR1MT52HW9x8PCer7VfSbnzdZsdumn6kkl0Ml3Sk6k1rpjPv3CWIhhBlURk9awsi-u3DBgHT9sRt11zz9VJu2abWJzZYpYV4Ejwigw_h-MAHuhaZ335WNre-bhV5JDIGxXXIWG8xFI7SikTRp_a94p-lPljFEiXPiwDqOuhU5aW2HGIphc6J6X6FIlYyc3C2rKWWae6Pdrn_UWBjaaBkBcz7pqs7YJGQWCDP_c6QTRajtraTw',
    'https://lh3.googleusercontent.com/aida/ADBb0uimybE4vOvjRZ9l08b5zYOQD30Mvw0kZ1cApsA3AnbY1K9wsv5r65yshKdGiMXYQFWhVRBd955h841ilQoLig6bHTOrPzTh4nzl0nDzZtroR6E6aLun0sxYz_CkUjx5VCu-KM4Pe1Hp1PML9Y7iAvZvsvZYnV0FZd6ji-nK4UechdRxUf8Yn9BhiJlKpC-b6Py1X43Nybsfwg1d5hd_iz8L0dySb3vT6Xsh1u3sQ3Bp3uBFKt6oIlntVK05NrLEe00fReNMZRbe',
    'https://lh3.googleusercontent.com/aida/ADBb0uiGwzJ0P9FIHfL-Is0yzYweINZc-80LqL3YecbNxM3peXZ729RljOi7qefimAdRtuyyizUPK2M7qp5aQMQ36gKwlc1ZbHB5RnaFYnGmYLmL4YOH7Hf9hZIYGT7Yy-9nV87nuU1Gq5775AVGTKuhdmwuOIZAdiNptBwhVMOblYRiAaC9lzyGVo4oAvfWQZoxJZ1OyVeVOvafV8g_br-7eP4uNuqXoWEbckkenDM8H_7dj6ol29-c4SJq-TpWU1SSyvD9DEW4iJof',
    'https://lh3.googleusercontent.com/aida/ADBb0uhVvJ_9bPzGHy_Qy7fjoM5FvdaEDIrlYXW1irKiJ8iGEFJ-0k80GsGFE_vsNTF1NoZNj-pLcyWVcp-v628__uyxDInF6Yia5kQSbSzxb9FCvnpCgnIXuE5c6FqfYPA9pG32G918AZFq4dxqM2ZmdFQC3g0b46mJmGmXk5Q-8dDht_UzW03cRFjFXVJI4he_IMijUmlFm3vGdijPSHpzFl40P5G5H0mECDRXzRisiz6QuMad0w44OPAgUMyTlwcZeJw0F1UCJ3K_hQ'
];

function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            console.log(`${url}: ${res.statusCode}`);
            resolve(res.statusCode === 200);
        }).on('error', (e) => {
            console.log(`${url}: Error ${e.message}`);
            resolve(false);
        });
    });
}

(async () => {
    for (const url of urls) {
        await checkUrl(url);
    }
})();
