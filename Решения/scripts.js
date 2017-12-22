
//ЛР №1
var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

function makeItClean(array) {
    var result = [];
    var i = 0;

    for (i = 0; i < array.length; i) 
        result = result.concat(array[i]);

    result = result.filter( function(item, pos) {
        return result.indexOf(item) == pos; });
    
	return result;
}

 console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, '1', undefined, true];
 
 
 //ЛР №2
 var IpAddress = '10.223.98.2';
 var subnetMask = 28;

function generateBroadcastAndNetworsAddresses(IpAddress, subnetMask) {
    if (typeof IpAddress != "string" || typeof subnetMask != "number") return null;
    let ip = IpAddress.split(".");
    let mask = [];
    // проверка айпи
    if (ip.length != 4) {
        console.warn("IpAddress should contains 4 octets");
        return null;
    }
    if (ip.some(function(item) {
        let converted = item;
        return item.length == 0 || isNaN(converted) || converted > 255 || converted < 0;
    })) {
        console.warn("IpAddress octets should be valid");
        return null;
    };
    // парсинг маски
    while (subnetMask > 0) {
        let tmp = "";
        for (let i = 0; i < 8; i) {
            tmp = --subnetMask >= 0 ? "1" : "0";
        }
        mask.push(parseInt(tmp, 2));
    }
    
    let getNetworkAddress = function(ip, mask) {
        let tmp = [];
        for (let i = 0; i < 4; i) {
            tmp.push(ip[i] & mask[i]);
        }
        return tmp.join(".");
    }
    let getBroadcastAddress = function(ip, mask) {
        let invertBin = function(bin) {
            let significant = 0;
            let tmp = bin;
            while (tmp > 1) {
                tmp = tmp >> 1;
                significant = (significant << 1) | 1;
            }
            return ~bin & significant;
        }
        let tmp = [];
        for (let i = 0; i < 4; i) {
            tmp.push(ip[i] | invertBin(mask[i]));
        }
        return tmp.join(".");
    }
    return "Broadcast - "  getBroadcastAddress(ip, mask)  ", Network - "  getNetworkAddress(ip, mask);
}


//ЛР №3

 var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
 var secondLongString = 'She is over bored and self assured oh no I know a dirty word';

function findSimilarWords(str1, str2) {
	var arr1 = str1.split(" ");
	var arr2 = str2.split(" ");
	var result = [];

	arr1.forEach(function(item) {
		if (arr2.includes(item) && !result.includes(item))
			result.push(item); });
		
	return result;
}


//ЛР №4

 let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
-function isEven(x) {/* Проверка на чётность */}
function isEven(x) {
	return x % 2 == 0; }
	
function filter(array, whatToDo) {
    return array.filter(whatToDo); }
	
 console.log(filter(numbers, isEven)); // --> [2, 8, 34]
 
 //ЛР №5
 
 @@ -6,6 6,15 @@ let usersData = [
 	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
 	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
 ];
function getFieldValues(arr, key){
	var array = [];

	array.forEach(function(item, i, arr){
		if (item[key]!= undefined) 
			array.push(item[key]);
	});
	return array.sort();
};
 console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']
 