var friends = [
    'Kelsy',
    'Joel',
    'Nathan',
    'Daniel',
    'Jenna'
];

var locations = [
    'kitchen',
    'bedroom',
    'bathroom',
    'study',
    'den',
    'pantry',
    'hallway',
    'poolhouse',
    'attic',
    'dining room'
];

var weapons = [
    'anthrax',
    'knife',
    'cross-bow',
    'dart',
    'pistol',
    'belt',
    'bleach',
    'hatchet',
    'fork',
    'scissors',
    'razor',
    'guitar',
    'machete',
    'vase',
    'skillet',
    'bat',
    'wine bottle',
    'rifle',
    'board',
    'shuriken'
];

for (i = 1; i < 101; i++) {
    var h3 = $(`<h3 class=accusation id=${i}>Accusation ${i}</h3>`)
    $('body').append(h3);
    var accObject = {
        num: i,
        friend: friends[Math.floor(Math.random() * friends.length)],
        weapon: weapons[Math.floor(Math.random() * weapons.length)],
        location: locations[Math.floor(Math.random() * locations.length)]
    };
    $(this.h3).click(alertInvestigator.bind(accObject));
    
};

function alertInvestigator() {
    alert(`Accusation ${this.num}: I accuse ${this.friend}, with the ${this.weapon} in the ${this.location}!`)
    return;
};








