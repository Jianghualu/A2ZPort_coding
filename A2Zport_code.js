function findLongestWord(sentence){

    let ans = "";
    let maxLength = 0;
    let maxVowel = 0; 

    function countVowels(word){
        const vowels = "aeiouAEIOU";
        let count = word.split("").filter(v => vowels.includes(v)).length;
        return count; 
    }

    const words = sentence.split(" ");
    for(const word of words){

        const english = word.replace(/[^a-zA-Z]/g, "");
        let curVowel = countVowels(english);

        if(english.length > maxLength ||
             (english.length === maxLength && curVowel > maxVowel)){
                ans = english;
                maxLength = english.length;
                maxVowel = curVowel;
        }
    }
    return ans;
}

const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";


/***Test scenarios:***/

// 1.Basic:
    const sentence1 = "Smart people learn from everything and everyone"; // ans: "everything"

// 2.Empty Sentence:
    const sentence2 = ""; // ans: ""

// 3.Special Characters:
    const sentence3 = "Hello, World!"; // ans: "Hello"

// 4.Multiple Words of the Same Length:
    const sentence4 = "apple banana cherry"; // ans: "banana"

// 5.Numbers and Symbols:
    const sentence5 = "Smart 1234 %%people loves **@@cats!"; // ans: "people"

// 6.Single Character Words:
    const sentence6 = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"; // ans: "A"

// 7.All Vowels:
    const sentence7 = "aeiou AEIOU"; // ans: "aeiou"

// 8.Long Sentence:
    const sentence8 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers."; // ans: "experience"

// 9.Leading with Spaces:
    const sentence9 = "  Stupid people already.  "; // ans: "already"

// 10. Repeated Longest Word:
    const sentence10 = "Smart people learn from everything Smart people learn from everything"; // ans: "everything"

// 11. Multiple Words with the Same Length and Vowel Count:
    const sentence11 = "dog cat sun sky"; // ans: "dog"


const longestWord = findLongestWord(sentence);
console.log(longestWord);