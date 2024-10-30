import { Link } from 'react-router-dom';

const CheckoutInput = ({ label, required = false, type = 'text', placeholder = '', className = '', value, onChange }) => (
    <div className={`checkout__input ${className}`}>
        <p>
            {label} {required && <span>*</span>}
        </p>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
)

const InputDetail = ({ onInputChange, formValues }) => {
    return (
        <div className="col-lg-8 col-md-6">
            <h6 className="coupon__code">
                <span className="fas fa-tag"></span>
                Have a coupon?
                <Link to="/"> Click here </Link> to enter your code
            </h6>

            <h6 className="checkout__title">Billing Details</h6>

            <div className="row">
                <div className="col-lg-6">
                    <CheckoutInput
                        label="First Name"
                        value={formValues.firstName}
                        onChange={onInputChange('firstName')}
                        required
                    />
                </div>
                <div className="col-lg-6">
                    <CheckoutInput
                        label="Last Name"
                        value={formValues.lastName}
                        onChange={onInputChange('lastName')}
                        required
                    />
                </div>
            </div>

            <CheckoutInput
                label="Country"
                value={formValues.country}
                onChange={onInputChange('country')}
                required
            />

            <CheckoutInput
                label="Address"
                required
                placeholder="Street Address"
                className="checkout__input__add"
                value={formValues.address}
                onChange={onInputChange('address')}
            />
            <CheckoutInput
                placeholder="Apartment, suite, unit, etc. (optional)"
                value={formValues.apartment}
                onChange={onInputChange('apartment')}
            />

            <CheckoutInput
                label="Postcode / Zip"
                value={formValues.postcode}
                onChange={onInputChange('postcode')}
                required
            />

            <div className="row">
                <div className="col-lg-6">
                    <CheckoutInput
                        label="Phone"
                        value={formValues.phone}
                        onChange={onInputChange('phone')}
                        required
                    />
                </div>
                <div className="col-lg-6">
                    <CheckoutInput
                        label="Email"
                        type="email"
                        value={formValues.email}
                        onChange={onInputChange('email')}
                        required
                    />
                </div>
            </div>

            <CheckoutInput
                label="Order notes"
                placeholder="Notes about your order, e.g. special notes for delivery."
                value={formValues.orderNotes}
                onChange={onInputChange('orderNotes')}
            />
        </div>
    );
};

export default InputDetail
