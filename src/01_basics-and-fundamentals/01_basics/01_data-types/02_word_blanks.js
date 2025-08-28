(() => {
    // This is a simple "Mad Libs" style word game called "Word Blanks".
    // The goal is to create an (optionally humorous) "Fill in the Blanks" style sentence.
    //
    // In a "Mad Libs" game, you are provided sentences with some missing words,
    // like nouns, verbs, adjectives, and adverbs.
    // You then fill in the missing pieces with words of your choice in a way
    // that the completed sentence makes sense.

    // Declare variables to store the words for the game.
    let noun = 'dog';
    let adjective = 'big';
    let verb = 'ran';
    let adverb = 'quickly';

    // Create the "Word Blanks" sentence using concatenation.
    let wordBlanksConcatenation = 'The ' + adjective + ' ' + noun + ' ' + verb + ' ' + adverb + '.';
    // Create the "Word Blanks" sentence using string interpolation (template literals).
    let wordBlanksStringInterpolation = `The ${adjective} ${noun} ${verb} ${adverb}.`;

    // Output the resulting sentences.
    console.log('concatenation - ', wordBlanksConcatenation); // Output: The big dog ran quickly.
    console.log('string interpolation - ', wordBlanksStringInterpolation); // Output: The big dog ran quickly.
})();
