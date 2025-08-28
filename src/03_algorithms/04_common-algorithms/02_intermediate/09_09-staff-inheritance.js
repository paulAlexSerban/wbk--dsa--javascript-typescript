/**
 * The objective of this coding challenge is to understand prototypal inheritance in JavaScript.
 *
 * Create a function called StaffMember that takes a single parameter, role, and assigns it to a member variable named role.
 *
 * Add two methods to the StaffMember prototype:
 * setRole(role): This should take a role as an argument and assign it to the role member variable.
 * getRole(): This should return the current role.
 *
 * Create another function called Technician that:
 * Inherits from StaffMember.
 * Takes two parameters, role and hasLeadership, and assigns them to the parent class's role and its own hasLeadership member variables, respectively.
 *
 * Add two methods to the Technician prototype:
 * getHasLeadership(): This should return the hasLeadership member variable.
 * setHasLeadership(hasLeadership): This should take a Boolean and set the hasLeadership member variable.
 */

// StaffMember constructor function
function StaffMember(role) {
    this.role = role;
}

// Adding setRole and getRole methods to StaffMember's prototype
StaffMember.prototype.setRole = function (role) {
    this.role = role;
};

StaffMember.prototype.getRole = function () {
    return this.role;
};

// Technician constructor function
function Technician(role, hasLeadership) {
    // Call parent constructor (StaffMember) with the given role
    StaffMember.call(this, role);
    this.hasLeadership = hasLeadership;
}

// Set up inheritance: Technician inherits from StaffMember
Technician.prototype = Object.create(StaffMember.prototype);
// Reset the constructor property back to Technician
Technician.prototype.constructor = Technician;

// Adding getHasLeadership and setHasLeadership methods to Technician's prototype
Technician.prototype.getHasLeadership = function () {
    return this.hasLeadership;
};

Technician.prototype.setHasLeadership = function (hasLeadership) {
    this.hasLeadership = hasLeadership;
};

// Test cases
const s1 = new StaffMember('Analyst');
console.log(s1.getRole()); // Should print "Analyst"
s1.setRole('Senior Analyst');
console.log(s1.getRole()); // Should print "Senior Analyst"

const tech1 = new Technician('Technician', false);
console.log(tech1.getRole()); // Should print "Technician"
console.log(tech1.getHasLeadership()); // Should print false
tech1.setRole('Senior Technician');
tech1.setHasLeadership(true);
console.log(tech1.getRole()); // Should print "Senior Technician"
console.log(tech1.getHasLeadership()); // Should print true
