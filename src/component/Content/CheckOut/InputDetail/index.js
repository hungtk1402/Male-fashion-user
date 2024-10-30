import { Link } from 'react-router-dom';

const CheckoutInput = ({ label, required = false, type = 'text', placeholder = '', className = '' }) => (
    <div className={`checkout__input ${className}`}>
        <p>
            {label} {required && <span>*</span>}
        </p>
        <input type={type} placeholder={placeholder} />
    </div>
)

const InputDetail = () => {
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
                    <CheckoutInput label="First Name" required />
                </div>
                <div className="col-lg-6">
                    <CheckoutInput label="Last Name" required />
                </div>
            </div>

            <CheckoutInput label="Country" required />

            <CheckoutInput
                label="Address"
                required
                placeholder="Street Address"
                className="checkout__input__add"
            />
            <CheckoutInput placeholder="Apartment, suite, unit, etc. (optional)" />

            <CheckoutInput label="Postcode / Zip" required />

            <div className="row">
                <div className="col-lg-6">
                    <CheckoutInput label="Phone" required />
                </div>
                <div className="col-lg-6">
                    <CheckoutInput label="Email" required type="email" />
                </div>
            </div>

            <CheckoutInput
                label="Order notes"
                placeholder="Notes about your order, e.g. special notes for delivery."
            />
        </div>
    );
};

export default InputDetail
