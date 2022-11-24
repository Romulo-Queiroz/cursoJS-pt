function recursiva (max) {
    if (max >= 10) return;
    max ++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

// modelo de function recursiva