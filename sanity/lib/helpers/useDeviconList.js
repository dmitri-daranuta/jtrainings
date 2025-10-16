import { useEffect, useState } from 'react';

const useDeviconList = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/devicons/devicon/master/devicon.json',
        );
        const data = await res.json();
        const allIcons = data.flatMap((icon) => {
          const variants = icon.versions.font || [];
          return variants.map((variant) => `devicon-${icon.name}-${variant}`);
        });
        setIcons(allIcons);
      } catch (error) {
        console.error('Failed to fetch Devicon icons:', error);
      }
    };

    fetchIcons();
  }, []);

  return icons;
};

export default useDeviconList;
