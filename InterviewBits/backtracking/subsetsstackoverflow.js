function findSubsets( array ){
    var limit = array.length
      , length = 0
      , start = limit
      , aOutput = []
    ;

    while (length <= limit) {
        aOutput.push(
            array.slice( start, start + length )
        );

        if ((++start + length) > limit) {
            start = 0;
            length++;
        };
    };

    return aOutput;
};

console.log(JSON.stringify(findSubsets(['A', 'B', 'C'])));
