// Initialize user profiles
const userProfiles = [
    { id: 1, name: "Alice", status: "inactive" },
    { id: 2, name: "Megan", status: "inactive" },
    { id: 3, name: "David", status: "inactive" }
];

// Display original user profiles
console.log("Original Profiles:", userProfiles);

// Create a copy with the spread operator
const sessionProfiles = [...userProfiles];

// Display session profiles
console.log("Session Profiles:", sessionProfiles);

// Mark session users as active
console.log("\nMark session users as active using forEach()...\n");
sessionProfiles.forEach(profile => {
    profile.status = "active";
});

// Display session profiles
console.log("Session Profiles:", sessionProfiles);

// Display user profiles
console.log("Original Profiles:", userProfiles);