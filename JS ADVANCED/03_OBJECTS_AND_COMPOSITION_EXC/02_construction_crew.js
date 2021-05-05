function solve(obj = {}) {
    if (obj.dizziness) {
        let requiredWater = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += requiredWater;
        obj.dizziness = false;

    }
    return obj;
}

console.log(solve({
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
));
