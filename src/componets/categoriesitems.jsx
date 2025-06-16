import { useState } from 'react';
import Header from '../componets/header'

const categoriesData = [
    {
        name: 'Alternative',
        color: '#D80060',
        subcategories: [],
    },
    {
        name: 'Blues',
        color: '#E64528',
        subcategories: [
            'Acoustic Blues',
            'Blues Rock',
            'Canadian Blues',
            'Jazz Blues',
            'Piano Blues',
            'Soul Blues',
            'Swamp Blues',
        ],
    },
    {
        name: 'Classical',
        color: '#F28C00',
        subcategories: [],
    },
    {
        name: 'Country',
        color: '#F2CA00',
        subcategories: [],
    },
    {
        name: 'Dance',
        color: '#61B221',
        subcategories: [],
    },
    {
        name: 'Electronic',
        color: '#3F8133',
        subcategories: [],
    },
    {
        name: 'Fitness & Workout',
        color: '#00C5CF',
        subcategories: [],
    },
    {
        name: 'Hip-Hop/Rap',
        color: '#00A5E2',
        subcategories: [],
    },
    {
        name: 'Industrial',
        color: '#0B3D91',
        subcategories: [],
    },
];

export default function CategoriesItems() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCategory = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="categories-container">
            <Header />
            <h2 className="page-title">Categories</h2>
            {categoriesData.map((category, index) => (
                <div key={index} className="category-block">
                    <div
                        className="category-header"
                        style={{ backgroundColor: category.color }}
                        onClick={() => toggleCategory(index)}
                    >
                        <span className="category-name">{category.name}</span>
                        <span className="dots">•••</span>
                    </div>

                    {openIndex === index && category.subcategories.length > 0 && (
                        <div className="subcategory-list">
                            {category.subcategories.map((sub, idx) => (
                                <div key={idx} className="subcategory-item">
                                    {sub} <span className="arrow">›</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
