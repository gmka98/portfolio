import { useState, useEffect } from 'react';

const AnimatedExperience = () => {
  const initialExperienceInMonths = 11;
  const [totalMonths, setTotalMonths] = useState(initialExperienceInMonths);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalMonths(prevTotalMonths => prevTotalMonths + 1);
    }, 1000 * 60 * 60 * 24 * 30); // Update every 30 days (approximately one month)

    return () => clearInterval(interval);
  }, []);

  const calculateYearsAndMonths = (totalMonths) => {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
  };

  const { years, months } = calculateYearsAndMonths(totalMonths);

  return (
    <div className="flex flex-col items-end justify-center xl:items-center">
      <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
        {totalMonths >= 23 ? `${years} ${years === 1 ? 'year' : 'years'}` : `${years} ${years === 1 ? 'year' : 'years'} and ${months} ${months === 1 ? 'month' : 'months'}`}
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
        total experience
      </h2>
    </div>
  );
};

export default AnimatedExperience;
