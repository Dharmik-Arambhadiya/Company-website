import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Research.css';

const Research = () => {
    const [activeTab, setActiveTab] = useState('Research');
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderButton = (tabName, label) => (
        <button
            className={activeTab === tabName ? 'active' : ''}
            onClick={() => setActiveTab(tabName)}
        >
            {label}
        </button>
    );

    const renderTabContent = (tabName, title, content) => (
        (isMobileView || activeTab === tabName) && (
            <div>
                <div className="tab-content-info">
                    <h3>{title}</h3>
                    <span>{content}</span>
                </div>
            </div>
        )
    );

    return (
        <>
            <section>
                <div className="researchWrapper">
                    <div className="button-nav">
                        {renderButton('Research', 'Research')}
                        {renderButton('Wireframes', 'Wireframes')}
                        {renderButton('CreativeDesign', 'Creative Design')}
                        {renderButton('UXSolutions', 'UX-Solutions')}
                        {renderButton('Branding', 'Branding')}
                    </div>
                    <div className='content'>
                        {renderTabContent('Research', 'Research', 'During our research, we explored various mindfulness and wellness platforms to gather the most authentic and effective practices. We aimed to offer Pure Harmony\'s users a unique experience that allows for personal exploration. Instead of rigid guidelines, we designed the process to provide users with the freedom to make their own choices, fostering a deeper and more personal connection to their mindfulness journey.')}
                        {renderTabContent('Wireframes', 'Wireframes', 'We created wireframes to visualize the app\'s structure and layout, ensuring that the user experience was intuitive and seamless. Our wireframes included a detailed breakdown of the app\'s features, such as guided meditation sessions, mood tracking, and journaling. By mapping out the app\'s functionality early in the design process, we were able to identify potential pain points and make adjustments to improve the user experience.')}
                        {renderTabContent('CreativeDesign', 'Creative Design', 'Our creative design phase focused on bringing the wireframes to life through visual elements and branding. We developed a color palette and typography that reflected Pure Harmony\'s brand values of tranquility and balance. By incorporating soothing colors and clean, modern design elements, we created a visually appealing app that resonated with our target audience.')}
                        {renderTabContent('UXSolutions', 'UX-Solutions', 'To enhance the user experience, we implemented several key features, such as personalized recommendations and progress tracking. By leveraging user data and feedback, we were able to tailor the app to each user\'s unique needs and preferences. These UX solutions helped users stay engaged and motivated on their mindfulness journey, leading to a more fulfilling experience.')}
                        {renderTabContent('Branding', 'Branding', 'Our branding efforts focused on creating a cohesive and memorable brand identity for Pure Harmony. We developed a logo, color palette, and visual elements that reflected the app\'s core values of mindfulness and wellness. By establishing a strong brand presence, we were able to differentiate Pure Harmony from competitors and attract a loyal user base.')}
                    </div>
                </div>
            </section>
        </>
    );
};

Research.propTypes = {
    activeTab: PropTypes.string,
    isMobileView: PropTypes.bool,
};

export default Research;
