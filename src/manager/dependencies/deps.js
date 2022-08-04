const dependencies = {}

export function register(key, dependency) {
    dependencies[key] = dependency;
}

export function getDependency(key) {
    if (dependencies[key]) return dependencies[key];
}