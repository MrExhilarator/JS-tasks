/*countWords returns the number of 
words in a string*/
function countWords(string) {
    string = string.trim();
    if (string === '') return 0;
    return string.split(/\s+/).length;
}
