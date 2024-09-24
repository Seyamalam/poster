'use client'

import Image from 'next/image'

const data = [
  {
    Model: 'Random Forest',
    Accuracy: 0.85,
    'Jaccard Index': 0.07,
    Precision: 0.47,
    Recall: 0.08,
    'F1 Score': 0.13,
  },
  {
    Model: 'XGBoost',
    Accuracy: 0.82,
    'Jaccard Index': 0.09,
    Precision: 0.29,
    Recall: 0.12,
    'F1 Score': 0.17,
  },
  {
    Model: 'Random Forest',
    Accuracy: 0.79,
    'Jaccard Index': 0.68,
    Precision: 0.77,
    Recall: 0.87,
    'F1 Score': 0.81,
  },
  {
    Model: 'XGBoost',
    Accuracy: 0.79,
    'Jaccard Index': 0.66,
    Precision: 0.80,
    Recall: 0.79,
    'F1 Score': 0.79,
  },
];

const citations = [
  "Arsalan, Khan., Moiz, Qureshi., Muhammad, Daniyal., Kassim, Tawiah. (2023). A Novel Study on Machine Learning Algorithm-Based Cardiovascular Disease Prediction. Health \& Social Care in The Community,  doi: 10.1155/2023/1406060",
  "Kamran, Mehrabani-Zeinabad., Awat, Feizi., Masoumeh, Sadeghi., Hamidreza, Roohafza., Mohammad, Talaei., Nizal, Sarrafzadegan. (2023). Cardiovascular disease incidence prediction by machine learning and statistical techniques: a 16-year cohort study from eastern Mediterranean region. BMC Medical Informatics and Decision Making,  doi: 10.1186/s12911-023-02169-5",
  "Xi, Wei., Cong, Jun, Rao., Xi, Sheng, Xiao., Lin, Chen., Mark, Goh. (2023). Risk assessment of cardiovascular disease based on SOLSSA-CatBoost model. Expert systems with applications,  doi: 10.1016/j.eswa.2023.119648",
  "Weber, Liu., Liliana, Laranjo., Harry, Klimis., Jason, Chiang., Jason, Yue., Simone, Marschner., Juan, C., Quiroz., Louisa, Jorm., Clara, K, Chow. (2023). Machine-learning versus traditional approaches for atherosclerotic cardiovascular risk prognostication in primary prevention cohorts: a systematic review and meta-analysis. European Heart Journal - Quality of Care and Clinical Outcomes,  doi: 10.1093/ehjqcco/qcad017",
  "Elias, Dritsas., Maria, Trigka. (2023). Efficient Data-Driven Machine Learning Models for Cardiovascular Diseases Risk Prediction. Sensors,  doi: 10.3390/s23031161",
  "Rahman, M. A., Noor, R. M., Mallik, S., Santa, N. K., Deb, S., \& Pathak, A. Classification Of Health Risk Levels For Pregnant Women Using Support Vector Machine (SVM) Algorithm.",
]

const confusionMatrixData = [
  { Actual: 'Positive', Predicted: 'Positive', Count: 20 },
  { Actual: 'Positive', Predicted: 'Negative', Count: 5 },
  { Actual: 'Negative', Predicted: 'Positive', Count: 3 },
  { Actual: 'Negative', Predicted: 'Negative', Count: 22 },
];

export default function CardiovascularPosterComponent() {
  return (
    <div className="bg-white text-black p-8 flex flex-col aspect-[2/3]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Image 
          src="/logo/ieee.png" 
          alt="IEEE Computer Society Bangladesh Chapter Logo" 
          width={300} 
          height={100} 
        />
        <h1 className="text-4xl font-bold text-blue-700">2024 IEEE Conference on Computing, Applications and Systems (COMPAS)</h1>
        <Image 
          src="/logo/compas.png" 
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
            A major cause of illness and mortality on a global scale is Cardiovascular Disease (CVD). Ensuring timely response and efficient management requires precise risk prediction. This study rigorously examines the use of support vector machines (SVM) and other advanced machine learning algorithms to optimize cardiovascular risk prediction. The authors have obtained a comprehensive dataset comprising patient gender analysis, patient behavior, and medical history parameters from a diverse patient cohort. The dataset has been meticulously preprocessed to impute missing values and accurately welcome and encode attributes. The authors utilized multiple machine learning models, including SVM, random forest, and XG boosting, to forecast the likelihood of future cardiovascular events. The authors' results unequivocally demonstrate that SVM, with its kernel technique and margin optimization, delivers superior performance in accuracy, precision, and recall compared to traditional logistic regression models. Ensemble methods such as Random Forest and XG Boosting are essential for managing imbalanced data and performing thorough feature importance analysis in data science and machine learning. This will enable doctors to easily understand each feature in predicting risk. In conclusion, the integration of machine learning algorithms, especially SVMs, into cardiovascular risk prediction frameworks can significantly enhance their predictive power. These advances have the potential to revolutionize CVD risk stratification and pave the way for personalized medicine, ultimately improving patient outcomes.
            </p>
          </div>

          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Methodology</h3>
            <div className="my-4 space-y-2">
              <Image 
                src="/cardio/fig1.jpg" 
                alt="Methodology Flowchart" 
                width={500} 
                height={400} 
                className="mx-auto"
                />
              <small className='ml-3'><strong>Figure:</strong> Proposed Method for training and evaluating models</small>
            </div>
            <p className="text-sm">
              The study employs quantitative techniques, including data collection, exploratory data analysis (EDA), data preprocessing, and model training and evaluation. The process involves handling imbalanced datasets and incorporating feature importance analysis.
            </p>
          </div>

          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Data Preprocessing</h3>
            <p className="text-sm">
            Data Collection: At this moment, the data is imported and processed. 
            Viewing The Structure of The Data: With this approach, we will aim to understand the data that are to be analyzed seriously. <br />
            Selecting Data: At this moment, your goal is to prepare the data for the modeling process, so that you will only have the necessary information in the data. <br />
            Modifying Variables: This will ensure that the data and modeling will work.
            Identifying Outliers and <br /> Missing Data: You are looking for missing data, irregular data, or blank data.
            </p>
            <Image 
              src="/cardio/fig2.png" 
              alt="Data Preprocessing Pipeline" 
              width={500} 
              height={600} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
              Our data preprocessing pipeline includes sampling techniques, data normalization, one-hot encoding, and feature selection to prepare the dataset for model training and evaluation. About 15% of individuals in this dataset have a risk of developing CHD in a 10-year interval. The visualization (Fig.2) also has the highest proportion of middle-aged individuals, with the majority in the age group of 40-45 years.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
         <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Data Analysis: Blood Pressure</h3>
            <Image 
              src="/cardio/fig6a.png" 
              alt="Proportion of Blood Pressure Levels" 
              width={400} 
              height={300} 
              className="mx-auto my-4"
            />
            <Image 
              src="/cardio/fig6b.png" 
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
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Data Preprocessing Workflow</h3>
            <p className="text-sm">
            The Random Forest and XGBoost models will be used in my data science project to handle the many categories within my attributes. These are models that are well known for their capabilities in classification and regression tasks. Random Forest uses multiple trees to create its predictions producing more consistent outcomes, while XGBoost optimises decision trees to enhance its predictive performance.
            </p>
            <Image 
              src="/cardio/fig7.png" 
              alt="BMI Distribution and CHD Risk" 
              width={500} 
              height={400} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
            I chose to use these models to tackle attributes with many categories within my dataset to ensure I get the most reliable and accurate prediction. In the preprocessing of the data (depicted in Fig.7), non-informative or imbalanced classes attributes, such as "is\_smoking", "cigsPerDay", "TenYearCHD", and "prevalentStroke", are removed. Categorical variables are one-hot encoded to expand the dataset. The raw data is normalized to standardize features and ensure the data is mean-centered with unit variance. Due to the severe class imbalance, the data is resampled using ADASYN.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Model Performance</h3>

            <p className="text-sm">After EDA, preprocessing, and modeling, we tested the model. The table below shows the performance metrics of the model.</p>

            <table className='border border-black text-sm my-3'>
              <thead>
                <tr className='*:border *:border-black *:px-1'>
                  <th>Model</th>
                  <th>Accuracy</th>
                  <th>Jaccard Index</th>
                  <th>Precision</th>
                  <th>Recall</th>
                  <th>F1 Score</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className='*:border *:border-black *:text-center'>
                    <td>{row.Model}</td>
                    <td>{row.Accuracy}</td>
                    <td>{row['Jaccard Index']}</td>
                    <td>{row.Precision}</td>
                    <td>{row.Recall}</td>
                    <td>{row['F1 Score']}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-sm">The results show that sampling techniques improve model performance on imbalanced datasets. However, the Jaccard index needs improvement.</p>
            
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold w-full text-orange-600 my-4">Confusion Matrix</h2>
              <table className="border-collapse w-full max-w-md text-sm">
                <thead>
                  <tr>
                    <th className="border border-black px-2"></th>
                    <th className="border border-black px-2">Predicted Positive</th>
                    <th className="border border-black px-2">Predicted Negative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-2">Actual Positive</td>
                    <td className="border border-black px-2">
                      {confusionMatrixData.find((row) => row.Actual === 'Positive' && row.Predicted === 'Positive')?.Count}
                    </td>
                    <td className="border border-black px-2">
                      {confusionMatrixData.find((row) => row.Actual === 'Positive' && row.Predicted === 'Negative')?.Count}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2">Actual Negative</td>
                    <td className="border border-black px-2">
                      {confusionMatrixData.find((row) => row.Actual === 'Negative' && row.Predicted === 'Positive')?.Count}
                    </td>
                    <td className="border border-black px-2">
                      {confusionMatrixData.find((row) => row.Actual === 'Negative' && row.Predicted === 'Negative')?.Count}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm">
              The confusion matrix for our Random Forest model shows its performance in classifying CHD risk. The model demonstrates good accuracy, with a balance between true positives and true negatives.
            </p>
          </div>

          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Optimization</h3>
            <p className="text-sm">We tuned the ratio of the oversample using ADASYN sampling and plotted the precision-recall curve for each ratio threshold.</p>
            <Image 
              src="/cardio/fig11.jpg" 
              alt="Prevalent Stroke and CHD" 
              width={400} 
              height={300} 
              className="mx-auto my-4"
            />
            <p className="text-sm">
            The optimal threshold for both models is 0.9. After optimization, both models showed improved accuracy and Jaccard index. The Random Forest model has a higher recall, while the XGBoost model has a higher precision.
            </p>
          </div>

          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">Conclusion</h3>
            <p className="text-sm">
            In conclusion, the evaluation of the models on both sampled and unsampled data revealed that the sampled data consistently outperformed the unsampled data in terms of precision, recall, and overall performance. The sampled data, obtained through techniques such as ADASYN and Random Under Sampling, effectively balanced the class distribution and mitigated the impact of class imbalance.
            Comparing the Random Forest and XGBoost models, both models demonstrated similar outcomes in the F1 score. However, the XGBoost model exhibited higher precision, indicating a lower rate of False Positives (Type I error) and a reduced risk of misdiagnosis Therefore, based on the objective of reducing misdiagnosis and ensuring a high precision rate, the XGBoost model would be the preferred option for predicting CHD risk in patients.
            </p>
          </div>

          <div className="bg-orange-100 p-4">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">References</h3>
            <ul className="list-decimal text-xs list-inside">
              {citations.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
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