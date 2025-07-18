/**
 * Average Salary Excluding the Minimum and Maximum Salary
 *
 * You are given an array of unique integers salary where
 * salary[i] is the salary of the ith employee.
 *
 * Return the average salary of employees excluding the minimum
 * and maximum salary. Answers within 10-5 of the actual answer
 * will be accepted.
 *
 * Example 1:
 * Input: salary = [4000,3000,1000,2000]
 * Output: 2500.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
 * Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
 *
 * Example 2:
 * Input: salary = [1000,2000,3000]
 * Output: 2000.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
 * Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
 *
 * Constraints:
 * 3 <= salary.length <= 100
 * 1000 <= salary[i] <= 106
 * All the integers of salary are unique.
 */

/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
    let minSalary = salary[0];
    let maxSalary = salary[0];
    let sum = 0;

    for (let i = 0; i < salary.length; i++) {
        minSalary = Math.min(minSalary, salary[i]);
        maxSalary = Math.max(maxSalary, salary[i]);
        sum += salary[i];
    }

    return (sum - minSalary - maxSalary) / (salary.length - 2);
};

// Test cases:
console.log(average([4000, 3000, 1000, 2000])); // Output: 2500.00000
console.log(average([1000, 2000, 3000])); // Output: 2000.00000

/**
 * This code defines a function average that takes an array of unique integers
 * salary and returns the average salary of employees excluding the minimum
 * and maximum salary. The function first initializes variables for the minimum
 * salary, maximum salary, and the sum of all salaries. It then iterates through
 * the salary array to find the minimum and maximum salaries and calculate the sum.
 * Finally, it calculates and returns the average salary excluding the minimum and
 * maximum salaries.
 */

/**
 * MERN Project ideas:
 *
 * Employee Management System:
 * Create an application to manage employee data, including their salaries, positions,
 * and personal information. Implement the average salary calculation to display
 * statistics on the company's payroll, such as the average salary excluding
 * the minimum and maximum for different departments or positions.
 *
 * Job Portal:
 * Develop a job portal where users can search and apply for jobs, and employers
 * can post job openings. Use the average salary calculation to display insights
 * about the job market, like average salaries by industry, location, or experience
 * level, excluding outliers.
 *
 * Salary Benchmarking Tool:
 * Create a tool that helps users benchmark their salaries against the industry
 * standard. Users can input their current salary, job title, location, and other
 * relevant factors. Implement the average salary calculation to display salary
 * benchmarks for different industries or regions, excluding the highest and
 * lowest values.
 *
 * Freelance Marketplace:
 * Build a marketplace for freelancers and clients to collaborate on projects.
 * Clients can post project requirements, and freelancers can bid for those projects.
 * Use the average salary calculation to provide insights into freelancer earnings,
 * such as the average hourly rate for different categories of freelancers or projects,
 * excluding the highest and lowest rates.
 *
 * Company Review Platform:
 * Create a platform for employees to share reviews about their companies, including
 * salary information. Implement the average salary calculation to provide insights
 * into company salaries across various positions, industries, or regions, excluding
 * the highest and lowest values. This information can help job seekers make informed
 * decisions when choosing a company to work for.
 */
