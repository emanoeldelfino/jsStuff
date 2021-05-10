import Teacher, { promote } from "./teacher.js";
// import React, { Component } from 'react';

// Exports
// Default -> import ... from '';
// Named -> import { ... } from '';

// A module may have a default export and a bunch of named
// exports.

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
promote();

// modularity - Split code between multiple files.
// each file is a module.

// app is more maintainable
// working with modules the objects we define in a module
// are private by default. So it is not visible to other files.

// So we need to make it public through export keyword.
