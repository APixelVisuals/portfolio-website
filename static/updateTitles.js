module.exports = component => {

    //Get letters
    const getLetters = () => {
        const letters = ["a", "b", "c"];
        return letters[Math.floor(Math.random() * letters.length)];
    };

    //Get titles
    const titles = component.state.titles;

    //Set letters
    for (let t in titles) titles[t] = titles[t].map(getLetters);

    //Update
    component.forceUpdate();
};