import { Teacher } from './teacher.js';

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();

// modularity - Split code between multiple files.
// each file is a module.

// app is more maintable
// working with modules the objects we define in a module 
// are private by default. So it is not visible to other files.

// So we need to make it public through export keyword.
