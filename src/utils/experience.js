/**
 * Calculate years and months of experience from a start date
 * @param {string} startDate - Start date in format 'YYYY-MM-DD' or 'YYYY-MM'
 * @returns {string} - Formatted experience string (e.g., "3+ years" or "3 years 2 months")
 */
export const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    const yearsDiff = now.getFullYear() - start.getFullYear();
    const monthsDiff = now.getMonth() - start.getMonth();

    const totalMonths = (yearsDiff * 12) + monthsDiff;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
        return `${months} month${months !== 1 ? 's' : ''}`;
    }

    if (months === 0) {
        return `${years}+ year${years !== 1 ? 's' : ''}`;
    }

    return `${years}+ year${years !== 1 ? 's' : ''}`;
};

/**
 * Get experience duration in format "Nov 2022 - Present"
 * @param {string} startDate - Start date in format 'YYYY-MM-DD' or 'YYYY-MM'
 * @returns {string} - Formatted duration string
 */
export const getExperienceDuration = (startDate) => {
    const start = new Date(startDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const startMonth = months[start.getMonth()];
    const startYear = start.getFullYear();

    return `${startMonth} ${startYear} - Present`;
};

/**
 * Get total months of experience
 * @param {string} startDate - Start date in format 'YYYY-MM-DD' or 'YYYY-MM'
 * @returns {number} - Total months of experience
 */
export const getTotalMonths = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    const yearsDiff = now.getFullYear() - start.getFullYear();
    const monthsDiff = now.getMonth() - start.getMonth();

    return (yearsDiff * 12) + monthsDiff;
};
