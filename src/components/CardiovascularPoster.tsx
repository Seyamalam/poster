'use client'

import Image from 'next/image'

export default function CardiovascularPosterComponent() {
  return (
    <div className="bg-white text-black w-[2000px] h-[3000px] p-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Image 
          src="/public/logo/ieee.png" 
          alt="IEEE Computer Society Bangladesh Chapter Logo" 
          width={300} 
          height={100} 
        />
        <h1 className="text-4xl font-bold text-blue-700">2024 IEEE Conference on Computing, Applications and Systems (COMPAS)</h1>
        <Image 
          src="/public/logo/compas.png" 
          alt="IEEE COMPAS 2024 Logo" 
          width={200} 
          height={100} 
        />
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold text-orange-500 mb-4">Enhancing Cardiovascular Risk Prediction Using Support Vector Machines and Advanced Machine Learning Algorithms</h2>

      {/* Author Information */}
      <div className="bg-orange-400 text-white p-4 mb-4">
        <h3 className="text-2xl font-bold mb-2">Author Information</h3>
        <p className="text-lg">Abhijit Pathak, Touhidul Alam Seyam, Arnab Chakraborty, Nurjahan kamal Santa, Eftakar Uddin, Tasmim Akther Mim</p>
        <p className="text-lg">BGC Trust University Bangladesh, Chattogram, Bangladesh</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4 mb-4 flex-grow">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Abstract</h3>
            <p className="text-sm">
              This study rigorously examines the use of support vector machines (SVM) and other advanced machine learning algorithms to optimize cardiovascular risk prediction. The authors have obtained a comprehensive dataset comprising patient gender analysis, patient behavior, and medical history parameters from a diverse patient cohort. Multiple machine learning models were utilized, including SVM, random forest, and XG boosting, to forecast the likelihood of future cardiovascular events.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Methodology</h3>
            <Image 
              src="/public/cardio/fig1.jpg" 
              alt="Methodology Flowchart" 
              width={500} 
              height={400} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              The study employs quantitative techniques, including data collection, exploratory data analysis (EDA), data preprocessing, and model training and evaluation. The process involves handling imbalanced datasets and incorporating feature importance analysis.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Data Preprocessing</h3>
            <Image 
              src="/public/cardio/fig2.png" 
              alt="Data Preprocessing Pipeline" 
              width={500} 
              height={600} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              Our data preprocessing pipeline includes sampling techniques, data normalization, one-hot encoding, and feature selection to prepare the dataset for model training and evaluation.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Data Analysis: Blood Pressure</h3>
            <Image 
              src="/public/cardio/fig6a.png" 
              alt="Proportion of Blood Pressure Levels" 
              width={400} 
              height={300} 
              className="mx-auto my-4"
            />
            <Image 
              src="/public/cardio/fig6b.png" 
              alt="Blood Pressure Levels and CHD Risk" 
              width={500} 
              height={400} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              These charts illustrate the distribution of blood pressure levels in our dataset and their relationship with CHD risk. A significant portion of the population shows hypertension, which correlates with increased CHD risk.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Data Analysis: BMI and Weight Status</h3>
            <Image 
              src="/public/cardio/fig6c.png" 
              alt="BMI Distribution and CHD Risk" 
              width={500} 
              height={400} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              These charts show the distribution of BMI, proportions of weight status, and their relationship with CHD risk. Both underweight and obese individuals show elevated CHD risk compared to those with healthy BMI.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Model Performance</h3>
            <Image 
              src="/public/cardio/fig8.png" 
              alt="Confusion Matrix: Random Forest" 
              width={400} 
              height={400} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              The confusion matrix for our Random Forest model shows its performance in classifying CHD risk. The model demonstrates good accuracy, with a balance between true positives and true negatives.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Additional Risk Factors</h3>
            <Image 
              src="/public/cardio/fig4.png" 
              alt="Prevalent Stroke and CHD" 
              width={400} 
              height={300} 
              className="mx-auto my-4"
            />
            <Image 
              src="/public/cardio/fig5.png" 
              alt="Prevalent Hypertension and CHD" 
              width={400} 
              height={300} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              These charts show the relationships between prevalent stroke, hypertension, and CHD incidence, further illustrating the complexity of cardiovascular risk factors.
            </p>
          </div>
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Conclusion</h3>
            <p className="text-sm">
              The integration of machine learning algorithms, especially SVMs and Random Forests, into cardiovascular risk prediction frameworks significantly enhances their predictive power. Our analysis of various risk factors, including blood pressure, BMI, and medical history, provides a comprehensive approach to CHD risk assessment. These advances have the potential to revolutionize CVD risk stratification and pave the way for personalized medicine, ultimately improving patient outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm mt-4">
        <p>CUET IT Business Incubator, Chattogram, Bangladesh | 25 - 26 September, 2024</p>
      </div>
    </div>
  )
}