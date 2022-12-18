console.group(
  "1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis"
);
{
  // Funkcijos deklaravimas
  function printCapital(str) {
    // code ...

    console.log(str.toUpperCase());
  }
  console.log("---");
  // console.log("abcd");
  printCapital("abcd");
  // console.log("AAAA");
  printCapital("AAAA");
  // console.log("aBcD");
  printCapital("aBcD");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis"
);
{
  // Funkcijos deklaravimas
  function printLower(str) {
    // code ...

    console.log(str.toLowerCase());
  }
  console.log("---");
  // console.log("ABCD");
  printLower("abcd");
  // console.log("AAAA");
  printLower("AAAA");
  // console.log("aBcD");
  printLower("aBcD");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę"
);
{
  // Funkcijos deklaravimas
  function printFirstLetter(str) {
    // code ...

    return str.charAt(0);
  }
  console.log("---");
  console.log("ABCD");
  printFirstLetter("abcd");
  console.log("AAAA");
  printFirstLetter("AAAA");
  console.log("aBcD");
  printFirstLetter("aBcD");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę"
);
{
  // Funkcijos deklaravimas
  function printLastLetter(str) {
    // code ...
    console.log(str.charAt((str.length -= 1)));
  }
  // console.log('---');
  printLastLetter("Labas");
  printLastLetter("Ate");
  printLastLetter("Brieda");
  // console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę"
);
{
  // Funkcijos deklaravimas
  function printMiddleLetter(str) {
    // code ...
    let word = str.length;
    let mid = word / 2;

    return mid % 2 === 1
      ? console.log(str.charAt((mid -= 1)))
      : console.log(str.charAt(mid));
  }
  console.log("---");
  printMiddleLetter("Labas");
  printMiddleLetter("Ate");
  printMiddleLetter("Brieda");
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių"
);
{
  function getDoubleLetterCount(str) {
    // code ...

    return str.length;
  }
  console.log("---");
  console.log({
    labas: getDoubleLetterCount("labas"),
    kranas: getDoubleLetterCount("kranas"),
    kebabas: getDoubleLetterCount("kebabas"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų"
);
{
  function getDoubleLetterCount(str) {
    // code ...
    return str.length * 2;
  }
  console.log("---");
  console.log({
    labas: getDoubleLetterCount("labas"),
    kranas: getDoubleLetterCount("kranas"),
    kebabas: getDoubleLetterCount("kebabas"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių"
);
{
  function getArgsLetterSum(a, b) {
    // code ...
    return a.length + b.length;
  }
  console.log("---");
  console.log({
    "labas, abc": getArgsLetterSum("labas", "abc"),
    "kranas, jonas": getArgsLetterSum("kranas", "jonas"),
    "kebabas, kefyras": getArgsLetterSum("kebabas", "kefyras"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>"
);
{
  function containsLetterA(str) {
    // code ...

    return str.indexOf("a") >= 0;
  }
  console.log("---");
  console.log({
    labas: containsLetterA("labas"),
    kempė: containsLetterA("kempė"),
    Finakolė: containsLetterA("Finakolė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false"
);
{
  function containsLetter(str, letter) {
    // code ...
    return str.includes("a");
  }
  console.log("---");
  console.log({
    "labas, a": containsLetter("labas", "a"),
    "kempė, a": containsLetter("kempė", "a"),
    "Finakolė, u": containsLetter("Finakolė", "u"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių"
);
{
  function isEvenNumberOfLetters(str) {
    // code ...
    return str.length % 2 === 0;
  }
  console.log("---");
  console.log({
    labas: isEvenNumberOfLetters("labas"),
    kempės: isEvenNumberOfLetters("kempės"),
    123123: isEvenNumberOfLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {
    // code ...

    const count = str.match(/[aąėeiouy]/gi).length;

    return count;
  }
  console.log("---");
  console.log({
    aaaaa: getNumberOfVowels("aaaaa"),
    sasasasa: getNumberOfVowels("sasasasa"),
    aeyuioąčė: getNumberOfVowels("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {
    // code ...
    const count = str.match(/[s]/gi);
    if (count === null) return 0;

    return count.length;
  }
  console.log("---");
  console.log({
    aaaaa: getNumberOfConsonants("aaaaa"),
    sasasasa: getNumberOfConsonants("sasasasa"),
    aeyuioąčė: getNumberOfConsonants("aeyuioąčė"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių"
);
{
  function isOnlyLetters(str) {
    // ... code
    const letterRegex = new RegExp(`[a-z]`, "ig");
    let checkletters = str.search(letterRegex);
    if (checkletters < 0) {
      return false;
    } else if (checkletters >= 0) return true;

    return checkletters;
  }

  console.log("---");
  console.log({
    labas: isOnlyLetters("labas"),
    kempės: isOnlyLetters("kempės"),
    123123: isOnlyLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    // code ...
    count = str.match(/[a]/gi);

    if (count === null) return 0;

    return count.length;
  }
  console.log("---");
  console.log({
    labas: letterACount("labas"),
    kempės: letterACount("kempės"),
    123123: letterACount("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje"
);
{
  function letterCount(str, searchLetter) {
    // code ...
    const letterRegex = new RegExp(`[${searchLetter}]`, "ig");

    count = str.match(letterRegex);

    if (count === null) return 0;

    return count.length;
  }
  console.log("---");
  console.log({
    "labas, a": letterCount("labas", "a"),
    "kempės, k": letterCount("kempės", "k"),
    "123123, z": letterCount("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje"
);
{
  function IndexOfLetterA(str) {
    // code ...
    const searchLetter = str.indexOf("a");
    if (searchLetter < 0) return null;
    return searchLetter;
  }
  console.log("---");
  console.log({
    labas: IndexOfLetterA("labas"),
    kempės: IndexOfLetterA("kempės"),
    123123: IndexOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje"
);
{
  function IndexOfLetter(str, searchLetter) {
    // code ...
    const searchAnyLetter = str.indexOf(searchLetter);
    if (searchAnyLetter < 0) return null;
    return searchAnyLetter;
  }
  console.log("---");
  console.log({
    "labas, a": IndexOfLetter("labas", "a"),
    "kempės, k": IndexOfLetter("kempės", "k"),
    "123123, z": IndexOfLetter("123123", "z"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje"
);
{
  function indexesOfLetterA(str) {
    // code ...
    const letterRegex = new RegExp(`[a]`, "ig");

    const foundResult = [...str.matchAll(letterRegex)];

    const result = foundResult.map(({ index }) => index);

    return result;
  }
  console.log("---");
  console.log({
    labas: indexesOfLetterA("labas"),
    kempės: indexesOfLetterA("kempės"),
    123123: indexesOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje"
);
{
  function indexesOfLetter(str, searchLetter) {
    // code ...

    const letterRegex = new RegExp(`[a-z]`, "ig");

    const foundResults = [...str.matchAll(letterRegex)];
    console.log(foundResults);

    const result = foundResults.map(({ index }) => index);
    return result;
  }
  // console.log('---');
  console.log({
    "labas, a": indexesOfLetter("labas", "a"),
    "kempės, m": indexesOfLetter("kempės", "m"),
    "123123, 2": indexesOfLetter("123123", "2"),
  });
  // console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį"
);
{
  function removeFirstLetterA(str) {
    // code ...
    const deleteFirstLetter = str.replace("a", "");

    return deleteFirstLetter;
  }
  console.log("---");
  console.log({
    labas: removeFirstLetterA("labas"),
    kempiniukas: removeFirstLetterA("kempiniukas"),
    123123: removeFirstLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį"
);
{
  function removeLastLetterA(str) {
    // code ...
    const index = str.lastIndexOf("a");

    return str.substring(0, index) + str.slice(index + 1);
    // lastindexof ir suringti su stringu arba slice
  }
  console.log("---");
  console.log({
    labas: removeLastLetterA("labas"),
    kempiniukas: removeLastLetterA("kempiniukas"),
    123123: removeLastLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje"
);
{
  function removeAllOccurencesOfLetterA(str) {
    // code ...
    const deleteAllALetters = str.replace(/a/g, "");

    return deleteAllALetters;
  }
  console.log("---");
  console.log({
    labas: removeAllOccurencesOfLetterA("labas"),
    kempiniukas: removeAllOccurencesOfLetterA("kempiniukas"),
    123123: removeAllOccurencesOfLetterA("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje"
);
{
  function removeAllOccurencesOfLetter(str, letter) {
    // code ...
    // const letterRegex = new RegExp(`[${searchLetter}]`, 'ig');
    const deleteLetter = new RegExp(`[${letter}]`, "ig");
    const deleteAllALetters = str.replace(deleteLetter, "");

    return deleteAllALetters;
  }
  console.log("---");
  console.log({
    "labas, a": removeAllOccurencesOfLetter("labas", "a"),
    "kempiniukas, i": removeAllOccurencesOfLetter("kempiniukas", "i"),
    "123123, 3": removeAllOccurencesOfLetter("123123", "3"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group(
  "25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis."
);
{
  function filterLetters(str, lettersToRemove) {
    // code ...

    const deleteLetter = new RegExp(`[${lettersToRemove}]`, "ig");
    const deleteAllALetters = str.replace(deleteLetter, "");

    return deleteAllALetters;
  }
  console.log("---");
  const str = filterLetters("Brangakmienio paveikslas", ["a", "i"]);
  console.log(str);
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį"
);
{
  function replaceSpaceWithDash(str) {
    // code ...
    const ReplaceDash = str.split(" ").join("-");

    return ReplaceDash;
  }
  console.log("---");
  console.log({
    "viens du trys": replaceSpaceWithDash("viens du trys"),
    "as tave myliu": replaceSpaceWithDash("as tave myliu"),
    "Bairis seniuk": replaceSpaceWithDash("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja"
);
{
  function capitalize(str) {
    // code ...
    const arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  }
  console.log("---");
  console.log({
    "viens du trys": capitalize("viens du trys"),
    "as tave myliu": capitalize("as tave myliu"),
    "Bairis seniuk": capitalize("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group(
  "28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'"
);
{
  function strReverse(str) {
    // code ...
    return str.split("").reverse().join("");
  }
  console.log("---");
  console.log({
    abc: strReverse("abc"),
    "viens du trys": strReverse("viens du trys"),
    "as tave myliu": strReverse("as tave myliu"),
    "Bairis seniuk": strReverse("Bairis seniuk"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group(
  "29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)"
);
{
  function isPalyndrome(str) {
    
    let i = 0;
    let k = str.length - 1;
    while (i < k) {
      if (str.at(i) !== str.at(k)) return false;
      i++;
      k--;
    }
    return true;

    
  }
  console.log("---");
  console.log({
    mama: isPalyndrome("mama"),
    mamam: isPalyndrome("mamam"),
    123321: isPalyndrome("123321"),
    123456: isPalyndrome("123456"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);


  const fixParagraph = (paragraph) => paragraph
  .split(/([.?!])/)
  .slice(0, -1)
  .map((sentence) => sentence.trim())
  .map(capitalizeFirstLetter)
  .join('')
  .replaceAll(/\s+/g, ' ')
  .replaceAll(' ,', ',')
  .replaceAll(/([.?!,])([^\s])/g, `$1 $2`);

  const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  const fixedParagraph = fixParagraph(paragraph);
  console.log(paragraph);
  console.log(fixedParagraph);
  console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group(
  "31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą"
);
{
  function splitSentence(sentence) {
    // code ...

    return sentence.split(' ')
  }
  console.log("---");
  console.log({
    'labas, aš esu grybas': splitSentence('labas, aš esu grybas'),
    "Labas aš Jonas": splitSentence("Labas aš Jonas"),
    "Kėgliai yra gerai": splitSentence("Kėgliai yra gerai"),
  });
  console.log("---");

  {
    //atlikau netyčia kitaip nesinori ištrint gal prireiks.
    function splitSentence(sentence) {
      // code ...
      let sentenceArray = [];
      let i = 0;
      let k = 1;
      while (i < 3 && k < 4) {
        const splitWord2Array = sentence.split([" "], k).slice(i);
        i += 1;
        k += 1;
        sentenceArray.push(splitWord2Array);
      }
      // sentence.split([' '],1).slice(0)
      // sentence.split([' '],2).slice(1)
      // sentence.split([' '],3).slice(2)
  
      return sentenceArray
    }
    console.log("---");
  console.log({
    'labas, aš esu grybas': splitSentence('labas, aš esu grybas'),
    "Labas aš Jonas": splitSentence("Labas aš Jonas"),
    "Kėgliai yra gerai": splitSentence("Kėgliai yra gerai"),
  });
  console.log("---");
  }
}
console.groupEnd();
console.log();

// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];
console.group(
  "32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį"
);
{
  function explode(str, separator) {
    // code ...
    const string = str.replaceAll(separator, ' ')
    return string.split(' ')
  }
  console.log('---');
  console.log({
    "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
    "'home/about/13', '/'": explode('home/about/13', '/'),
  })
  console.log('---');
}
console.groupEnd();
console.log();
