"use client";

import Dropdown from "@/components/dropdown";
import React, {  useState } from "react";
import default_dropdown_values, {
  dropdown_options,
  requestData,
  DropdownValues,
  DropdownElements,
} from "@/data/dropdown_values";

export default function Home() {
  //Dropdown Options
  const AccountOptions = dropdown_options.account_amount_values;
  const PastCreditOptions = dropdown_options.past_credit_values;
  const CreditPurposeOptions = dropdown_options.credit_purpose_values;
  const SavingsAccountOptions = dropdown_options.saving_account_option_values;
  const EmploymentSinceOptions = dropdown_options.employment_duration_values;
  const PropertyOptions = dropdown_options.property_options_values;
  const otherInstallmantPlans = dropdown_options.other_installmant_plans_values;
  const housingOptions = dropdown_options.housing_values;
  const SexOptions = dropdown_options.sex;
  const ForeignWorkerOptions = dropdown_options.foreign_worker;
  const RelationshipOptions = dropdown_options.relationship_default;

  const [age, setAge] = useState<number>(18);
  const [duration, setDuration] = useState<number>(12);
  const [amount, setCreditAmount] = useState<number>(1000);
  const [installment, setInstallment] = useState<number>(6);
  const [ongoingCredits, setOngoingCredits] = useState<number>(0);
  const [scoreGiven, setScoreGiven] = useState<boolean>(false);
  const [Score, setScore] = useState<boolean>(false);
  

  const [AccountDropdownValue, setAccountDropdownValue] =
    useState<DropdownElements>(default_dropdown_values.account_amount_default);

  const [PastCreditDropdown, setPastCreditDropdown] =
    useState<DropdownElements>(default_dropdown_values.past_credit_default);

  const [CreditPurposeDropdown, setCreditPurposeDropdown] =
    useState<DropdownElements>(default_dropdown_values.credit_purpose_default);

  const [SavingsAccountDropdown, setSavingsAccountDropdown] =
    useState<DropdownElements>(default_dropdown_values.saving_account_default);

  const [EmploymentSinceDropdown, setEmploymentSinceDropdown] =
    useState<DropdownElements>(
      default_dropdown_values.employment_duration_default
    );

  const [PropertyDropdown, setPropertyDropdown] = useState<DropdownElements>(
    default_dropdown_values.propperty_default
  );

  const [InstallmantPlansDropdown, setInstallmantPlansDropdown] =
    useState<DropdownElements>(
      default_dropdown_values.other_installmant_plans_default
    );

  const [HousingDropdown, setHousingDropdown] = useState<DropdownElements>(
    default_dropdown_values.housing_default
  );

  const [SexDropdown, setSexDropdown] = useState<DropdownElements>(
    default_dropdown_values.sex_default
  );

  const [ForeignWorkerDropdown, setForeignWorkerDropdown] =
    useState<DropdownElements>(
      default_dropdown_values.foreign_worker_default
      // Handlers
    );

  const [RelationshipDropdown, setRelationshipDropdown] =
    useState<DropdownElements>(default_dropdown_values.relationship_default);

  const handleSexDropdownChange = (value: string) => {
    setSexDropdown({
      Sex_female: value == "Female",
      Sex_male: value == "Male",
    });
  };

  const handleRelationshipDropdownChange = (value: string) => {
    setRelationshipDropdown({
      divorced_separated: value == "divorced - separated",
      married: value == "married",
      married_widowed: value == "married - widowed",
      single: value == "single",
    });
  };

  const handleForeignWorkerDropdownChange = (value: string) => {
    setForeignWorkerDropdown({
      Foreign_Worker_no: value == "No",
      Foreign_Worker_yes: value == "Yes",
    });
  };

  const handleAccountDropdownChange = (value: string) => {
    setAccountDropdownValue({
      greater_200: "> 200" == value,
      no_account: "No Account" == value,
      smaller_equal_0: "= 0" == value,
      smaller_200: "< 200" == value,
    });
  };

  const handleCreditStatusDropdownChange = (value: string) => {
    setPastCreditDropdown({
      paid_at_this_bank: value == "Paid All Credits",
      critical_not_here: value == "Critical Account",
      delay_inpast: value == "Delay in the past",
      paid_tillnow: value == "Paid Current Credits Till Now",
      no_credits: value == "No Credits",
    });
  };

  const handlePurposeDropdownChange = (value: string) => {
    setCreditPurposeDropdown({
      business: value == "Business",
      new_Car: value == "New Car",
      used_Car: value == "Used Car",
      appliances: value == "Appliances",
      education: value == "Education",
      furniture: value == "Furniture",
      others: value == "Others",
      Radio_Television: value == "Radio - Television",
      Repairs: value == "Repairs",
      Retraining: value == "Retraining",
    });
  };

  const handleSavingsAccountDropdownChange = (value: string) => {
    setSavingsAccountDropdown({
      greater_equal_1000_DM: value === "greater_equal 1000 DM",
      smaller_100_DM: value == "smaller 100 DM",
      smaller_1000_DM: value == "smaller 1000 DM",
      smaller_500_DM: value == "smaller 500 DM",
      unknown_no_savings_account: value == "unknown/no savings account",
    });
  };

  const handleEmploymentSinceDropdownChange = (value: string) => {
    setEmploymentSinceDropdown({
      greater_equal_7_years: value === "greater - equal 7 years",
      smaller_1_year: value == "smaller 1 year",
      smaller_4_years: value == "smaller 4 years",
      smaller_7_years: value == "smaller 7 years",
      unemployed: value == "unemployed",
    });
  };

  const handlePropertyDropdownChange = (value: string) => {
    setPropertyDropdown({
      if_not_A121:
        value == "Building society savings agreement/ life insurance",
      if_not_A121_A122: value == "Car or other",
      real_estate: value == "Real estate",
      unknown_no_property: value == "Unknown/no property",
    });
  };

  const handleOtherInstallmantDropdownChange = (value: string) => {
    setInstallmantPlansDropdown({
      Bank: value == "Bank",
      None: value == "None",
      Stores: value == "Stores",
    });
  };

  const handlehousingDropdownChange = (value: string) => {
    setHousingDropdown({
      Housing_for_free: value == "Free",
      Housing_own: value == "Own",
      Housing_rent: value == "Rent",
    });
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    setAge(Number(newAge)); // Update the age state with the new value (convert it to a number)
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const duration = event.target.value;
    setDuration(Number(duration)); // Update the age state with the new value (convert it to a number)
  };

  const handleCreditAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = event.target.value;
    setCreditAmount(Number(amount)); // Update the age state with the new value (convert it to a number)
  };

  const handleInstallmantChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const installment = event.target.value;
    setInstallment(Number(installment)); // Update the age state with the new value (convert it to a number)
  };

  const handleOngoingCreditsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const ongoingCredits = event.target.value;
    setOngoingCredits(Number(ongoingCredits)); // Update the age state with the new value (convert it to a number)
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendDataToServer(data: { [key: string]: number | boolean }) {
    try {
      const response = await fetch("http://127.0.0.1:8080/predict", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Response from server:", responseData);
      
      setScoreGiven(true)
      if(responseData.prediction == 0) {
        setScore(false)
      } else {
        setScore(true)
      }
      console.log(Score)
      // Handle the response data as needed
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  }
  let content = <p>Found no movies.</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let requestData = {
      Duration_Months: duration,
      Credit_Amount: amount,
      Installment_Rate: installment,
      Age_Years: age,
      Number_Credits: ongoingCredits,
      "Checking_Account_Status_greater_equal 200 DM": AccountDropdownValue.greater_200,
      "Checking_Account_Status_no checking account": AccountDropdownValue.no_account,
      "Checking_Account_Status_smaller 0 DM": AccountDropdownValue.smaller_equal_0,
      "Checking_Account_Status_smaller 200 DM": AccountDropdownValue.smaller_200,
      "Credit_History_all credits at this bank paid back duly": PastCreditDropdown.paid_at_this_bank,
      "Credit_History_critical account/other credits existing (not at this bank)": PastCreditDropdown.critical_not_here,
      "Credit_History_delay in paying off in the past": PastCreditDropdown.delay_inpast,
      "Credit_History_existing credits paid back duly till now": PastCreditDropdown.paid_tillnow,
      "Credit_History_no credits taken/ all credits paid back duly": PastCreditDropdown.no_credits,
      "Purpose_business": CreditPurposeDropdown.business,
      "Purpose_car (new)": CreditPurposeDropdown.new_Car,
      "Purpose_car (used)": CreditPurposeDropdown.used_Car,
      "Purpose_domestic appliances": CreditPurposeDropdown.appliances,
      "Purpose_education": CreditPurposeDropdown.education,
      "Purpose_furniture/equipment": CreditPurposeDropdown.furniture,
      "Purpose_others": CreditPurposeDropdown.others,
      "Purpose_radio/television": CreditPurposeDropdown.Radio_Television,
      "Purpose_repairs": CreditPurposeDropdown.Repairs,
      "Purpose_retraining": CreditPurposeDropdown.Retraining,
      "Savings_Account_greater_equal 1000 DM": default_dropdown_values.saving_account_default.greater_equal_1000_DM,
      "Savings_Account_smaller 100 DM": SavingsAccountDropdown.smaller_100_DM,
      "Savings_Account_smaller 1000 DM": SavingsAccountDropdown.smaller_1000_DM,
      "Savings_Account_smaller 500 DM":SavingsAccountDropdown.smaller_500_DM,
      "Savings_Account_unknown/no savings account": SavingsAccountDropdown.unknown_no_savings_account,
      "Employment_Since_greater_equal 7 years": EmploymentSinceDropdown.greater_equal_7_years,
      "Employment_Since_smaller 1 year":EmploymentSinceDropdown.smaller_1_year,
      "Employment_Since_smaller 4 years":EmploymentSinceDropdown.smaller_4_years,
      "Employment_Since_smaller 7 years":EmploymentSinceDropdown.smaller_7_years,
      "Employment_Since_unemployed": EmploymentSinceDropdown.unemployed,
      "Property_if not A121 : building society savings agreement/ life insurance": PropertyDropdown.if_not_A121,
      "Property_if not A121/A122 : car or other, not in attribute 6": PropertyDropdown.if_not_A121_A122,
      "Property_real estate": PropertyDropdown.real_estate,
      "Property_unknown/no property": PropertyDropdown.unknown_no_property,
      "Other_Installment_Plans_bank": InstallmantPlansDropdown.Bank,
      "Other_Installment_Plans_none": InstallmantPlansDropdown.None,
      "Other_Installment_Plans_stores": InstallmantPlansDropdown.Stores,
      "Housing_for free": HousingDropdown.Housing_for_free,
      "Housing_own": HousingDropdown.Housing_own,
      "Housing_rent": HousingDropdown.Housing_rent,
      "Foreign_Worker_no": ForeignWorkerDropdown.Foreign_Worker_no,
      "Foreign_Worker_yes": ForeignWorkerDropdown.Foreign_Worker_yes,
      "Sex_female": SexDropdown.Sex_female,
      "Sex_male": SexDropdown.Sex_male,
      "Relationship_Status_divorced/separated": RelationshipDropdown.divorced_separated,
      "Relationship_Status_divorced/separated/married": RelationshipDropdown.married,
      "Relationship_Status_married/widowed": RelationshipDropdown.married_widowed,
      "Relationship_Status_single": RelationshipDropdown.single,
    };

    sendDataToServer(requestData);
  };

  return (
    <div className="prose dark:prose-invert">
  
      { scoreGiven ? 
      <div className="flex flex-col justify-center h-full">      
        <div className={`max-w-xs mt-20 text-lg mx-auto ${Score ? "text-green-500" : "text-red-500" }`} > <b>Score is {Score ? "Positive" : "Negative"}</b> </div>
        <button onClick = {() => (setScoreGiven(false))} className="p-3 mt-6 max-w-xs mx-auto rounded-lg bg-gray-300 text-black">
            <b>Rescore</b>
        </button>
      </div> 
      :
      <React.Fragment>
    <h1 className=" text-blue-300 text-center">Customer Credit Scoring</h1>
      <p className="text-center">Evaluate the Customer based on multiple information, such as purpose, saving account status, employment etc.</p>
      <p className=" top-2 text-center">Please fill the form to see the result:</p>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col justify-center h-full "
      >
        <label className="max-w-xs mx-auto w-full block  mt-6 text-sm font-medium text-gray-700">
          Age:
        </label>
        <input
          onChange={handleAgeChange}
          className="max-w-xs rounded-lg mx-auto mt-1 w-full p-1"
        ></input>
        <label className="max-w-xs mx-auto w-full block  mt-6 text-sm font-medium text-gray-700">
          Duration:
        </label>
        <input
          onChange={handleDurationChange}
          className="max-w-xs rounded-lg mx-auto mt-1 w-full p-1"
        ></input>
        <label className="max-w-xs mx-auto w-full block  mt-6 text-sm font-medium text-gray-700">
          Credit Amount:
        </label>
        <input
          onChange={handleCreditAmountChange}
          className="max-w-xs rounded-lg mx-auto mt-1 w-full p-1"
        ></input>
        <label className="max-w-xs mx-auto w-full block  mt-6 text-sm font-medium text-gray-700">
          Installmant:
        </label>
        <input
          onChange={handleInstallmantChange}
          className="max-w-xs rounded-lg mx-auto mt-1 w-full p-1"
        ></input>
        <label className="max-w-xs mx-auto w-full block  mt-6 text-sm font-medium text-gray-700">
          Number of Ongoing Credits:
        </label>
        <input
          onChange={handleOngoingCreditsChange}
          className="max-w-xs rounded-lg mx-auto mt-1 w-full p-1"
        ></input>
        <Dropdown
          options={SexOptions}
          label="Sex:"
          onValueChange={handleSexDropdownChange}
        />
        <Dropdown
          options={RelationshipOptions}
          label="Relationship:"
          onValueChange={handleRelationshipDropdownChange}
        />
        <Dropdown
          options={ForeignWorkerOptions}
          label="Foreing Worker:"
          onValueChange={handleForeignWorkerDropdownChange}
        />
        <Dropdown
          options={AccountOptions}
          label="Choose Account Status:"
          onValueChange={handleAccountDropdownChange}
        />

        <Dropdown
          options={PastCreditOptions}
          label="Choose Past Credit History:"
          onValueChange={handleCreditStatusDropdownChange}
        />

        <Dropdown
          options={CreditPurposeOptions}
          label="Credit Purpose:"
          onValueChange={handlePurposeDropdownChange}
        />
        <Dropdown
          options={SavingsAccountOptions}
          label="Saving Account Status:"
          onValueChange={handleSavingsAccountDropdownChange}
        />
        <Dropdown
          options={EmploymentSinceOptions}
          label="Employement Since:"
          onValueChange={handleEmploymentSinceDropdownChange}
        />
        <Dropdown
          options={PropertyOptions}
          label="Property Ownership:"
          onValueChange={handlePropertyDropdownChange}
        />
        <Dropdown
          options={otherInstallmantPlans}
          label="Other Installmant Plans:"
          onValueChange={handleOtherInstallmantDropdownChange}
        />
        <Dropdown
          options={housingOptions}
          label="Housing Situation:"
          onValueChange={handlehousingDropdownChange}
        />
        <button className="p-3 m-20 rounded-lg bg-gray-300 text-black">
          <b>Send</b>
        </button>
      </form>
      </React.Fragment>
     
}
    </div>
  );
}
