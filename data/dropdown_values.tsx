
export const requestData = {
    "Duration_Months": 4,
    "Credit_Amount": 20000,
    "Installment_Rate": 100,
    "Age_Years": 90,
    "Number_Credits": 8,
    "Checking_Account_Status_greater_equal 200 DM": false,
    "Checking_Account_Status_no checking account": false,
    "Checking_Account_Status_smaller 0 DM": false,
    "Checking_Account_Status_smaller 200 DM": true,
    "Credit_History_all credits at this bank paid back duly": false,
    "Credit_History_critical account/other credits existing (not at this bank)": true,
    "Credit_History_delay in paying off in the past": false,
    "Credit_History_existing credits paid back duly till now": false,
    "Credit_History_no credits taken/ all credits paid back duly": false,
    "Purpose_business": false,
    "Purpose_car (new)": true,
    "Purpose_car (used)": false,
    "Purpose_domestic appliances": false,
    "Purpose_education": false,
    "Purpose_furniture/equipment": false,
    "Purpose_others": false,
    "Purpose_radio/television": false,
    "Purpose_repairs": false,
    "Purpose_retraining": false,
    "Savings_Account_greater_equal 1000 DM": false,
    "Savings_Account_smaller 100 DM": false,
    "Savings_Account_smaller 1000 DM": true,
    "Savings_Account_smaller 500 DM": false,
    "Savings_Account_unknown/no savings account": false,
    "Employment_Since_greater_equal 7 years": false,
    "Employment_Since_smaller 1 year": false,
    "Employment_Since_smaller 4 years": true,
    "Employment_Since_smaller 7 years": false,
    "Employment_Since_unemployed": false,
    "Property_if not A121 : building society savings agreement/ life insurance": false,
    "Property_if not A121/A122 : car or other, not in attribute 6": false,
    "Property_real estate": true,
    "Property_unknown/no property": false,
    "Other_Installment_Plans_bank": false,
    "Other_Installment_Plans_none": true,
    "Other_Installment_Plans_stores": false,
    "Housing_for free": false,
    "Housing_own": true,
    "Housing_rent": false,
    "Foreign_Worker_no": false,
    "Foreign_Worker_yes": true,
    "Sex_female": false,
    "Sex_male": true,
    "Relationship_Status_divorced/separated": false,
    "Relationship_Status_divorced/separated/married": false,
    "Relationship_Status_married/widowed": true,
    "Relationship_Status_single": false
  };


export interface DropdownElements {
  [key: string]: boolean;
}
  
export interface DropdownValues {
    [key: string]: {
      [key: string]: boolean;
    };
  }



const default_dropdown_values: DropdownValues  = {
  account_amount_default: {
    greater_200: false,
    no_account: false,
    smaller_equal_0: true,
    smaller_200: false,
  },
  past_credit_default: {
    paid_at_this_bank: true,
    critical_not_here: false,
    delay_inpast: false,
    paid_tillnow: false,
    no_credits: false,
  },
  credit_purpose_default: {
    business: false,
    new_Car: false,
    used_Car: true,
    appliances: false,
    education: false,
    furniture: false,
    others: false,
    Radio_Television: false,
    Repairs: false,
    Retraining: false,
  },
  saving_account_default: {
    greater_equal_1000_DM: false,
    smaller_100_DM: false,
    smaller_1000_DM: false,
    smaller_500_DM: false,
    unknown_no_savings_account: true,
  },
  employment_duration_default: {
    greater_equal_7_years: true,
    smaller_1_year: false,
    smaller_4_years: false,
    smaller_7_years: false,
    unemployed: true,
  },
  propperty_default: {
    if_not_A121: true,
    if_not_A121_A122: false,
    real_estate: false,
    unknown_no_property: false,
  },
  other_installmant_plans_default: {
    Bank: true,
    None: false,
    Stores: false,
  },
  housing_default: {
    Housing_for_free: true,
    Housing_own: false,
    Housing_rent: false,
  },
  foreign_worker_default: {
    Foreign_Worker_yes: true,
    Foreign_Worker_no: false,
  },
  sex_default: {
    Sex_male: true,
    Sex_female: false,
  },
  relationship_default: {
    divorced_separated: true,
    married: false,
    married_widowed: false,
    single: false,
  },
};

export const dropdown_options = {
  account_amount_values: ["< 200", "No Account","> 200", "= 0"],
  past_credit_values: [
    "Paid All Credits",
    "Critical Account",
    "Delay in the past",
    "Paid Current Credits Till Now",
    "No Credits",
  ],
  credit_purpose_values: [
    "Used Car",
    "Business",
    "New Car",
    "Appliances",
    "Education",
    "Furniture",
    "Others",
    "Radio - Television",
    "Repairs",
    "Retraining",
  ],
  saving_account_option_values: [
    "unknown/no savings account",
    "greater_equal 1000 DM",
    "smaller 100 DM",
    "smaller 1000 DM",
    "smaller 500 DM",
  ],
  employment_duration_values: [
    "unemployed",
    "smaller 1 year",
    "smaller 4 years",
    "smaller 7 years",
    "greater - equal 7 years",
  ],
  property_options_values: [
    "Building society savings agreement/ life insurance",
    "Car or other",
    "Real estate",
    "Unknown/no property",
  ],
  other_installmant_plans_values: ["Bank", "None", "Stores"],
  housing_values: ["Free", "Own", "Rent"],
  sex: ["Male", "Female"],
  foreign_worker: ["Yes", "No"],
  relationship_default: [
    "divorced - separated",
    "married",
    "married - widowed",
    "single",
  ],
};

export default default_dropdown_values;
