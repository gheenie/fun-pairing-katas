const checkStudents = require('../katas/check-students');

describe('return true if all students are in the given cohort, false otherwise', () => {
    test('one student', () => {
        const students = [
            {name: 'Ben', cohort: 'October'}
        ];

        const cohort = 'October';

        expect(checkStudents(students, cohort)).toBe(true);
    });

    test('multiple students, same cohort', () => {
        const students = [
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
        ];

        const cohort = 'April';

        expect(checkStudents(students, cohort)).toBe(true);
    });

    test('multiple students, different cohort', () => {
        const students = [
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
        ];

        const cohort = 'October';

        expect(checkStudents(students, cohort)).toBe(false);
    });
});
