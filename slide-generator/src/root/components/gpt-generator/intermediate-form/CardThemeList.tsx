import React, { useState } from 'react'
import CardTheme from './CardTheme';
interface SelectedSubThemesInterface {
    selectedSubThemes: string[];
    setSelectedSubThemes: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardThemeList = ({ selectedSubThemes, setSelectedSubThemes }: SelectedSubThemesInterface) => {
    const [removedIndexes, setRemovedIndexes] = useState<number[]>([]);
    const handleSubThemeChange = (subTheme: string, index: number) => {
        if (selectedSubThemes.includes(subTheme) && selectedSubThemes.length > 5) {
            setRemovedIndexes([...removedIndexes, index]);
            setSelectedSubThemes(selectedSubThemes.filter((item) => item !== subTheme));
        }
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">

            {selectedSubThemes.slice(0, 10).map((subTheme, index) => (
                removedIndexes.includes(index) ? (
                    <CardTheme key={index} subTheme={subTheme} handleSubThemeChange={handleSubThemeChange} index={index} />
                ) : (
                    <CardTheme key={index} subTheme={subTheme} handleSubThemeChange={handleSubThemeChange} index={index} />
                ))
            )
            }
        </div>
    )
}

export default CardThemeList