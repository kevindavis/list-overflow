var presets = new Object();

presets.few = [200, 100, 150];
presets.lots = [100, 200, 100, 200, 100, 150, 120, 150];
presets.onehuge = [675, 200, 140];
// pile on your own test cases here! these are arrays of link sizes (in px)

// KNOWN ISSUES: 
// individual links beyond the size of the list
// at extreme numbers of links it could be slow.. 