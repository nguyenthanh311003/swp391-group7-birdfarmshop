import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Inputs from '~/Components/Input/Input';
import Line from '~/Components/Line/Line';
import Title from '~/Components/Title/Title';
import Button from '~/Components/Button/Button';

import { Input } from '@chakra-ui/react';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* Form */}
                <form className={cx('inner')}>
                    {/* Container 2 */}
                    <div className={cx('input-container')}>
                        <div>
                            <Inputs placeholder="Username"></Inputs>
                            <Line></Line>
                        </div>
                        <div>
                            <Inputs placeholder="Email"></Inputs>
                            <Line></Line>
                        </div>
                        <div>
                            <Inputs placeholder="Phone number"></Inputs>
                            <Line></Line>
                        </div>

                        <div>
                            <Inputs placeholder="Address"></Inputs>
                            <Line></Line>
                        </div>

                        <div className={cx('dob-container')}>
                            <div className={cx('dob-title')}>
                                <h2>Date of birth</h2>
                            </div>

                            {/* <Inputs dob type={'date'} placeholder="Date of birth"></Inputs> */}
                            <Input className={cx('dob-date')} type="date" />
                        </div>
                    </div>
                    {/*End container 1  */}
                    {/* Container 2 */}
                    <div className={cx('input-container')}>
                        <div>
                            <Inputs placeholder="Firstname"></Inputs>
                            <Line></Line>
                        </div>

                        <div>
                            <Inputs placeholder="Lastname"></Inputs>
                            <Line></Line>
                        </div>

                        <div>
                            <Inputs placeholder="Password"></Inputs>
                            <Line></Line>
                        </div>

                        <div>
                            <Inputs placeholder="Confirm password"></Inputs>
                            <Line></Line>
                        </div>

                        <div className={cx('gender-container')}>
                            <h2>Gender</h2>
                            <div className={cx('gender-input')}>
                                <div className={cx('gender-input-item')}>
                                    <input type="radio" name="check" />
                                    <label>Female</label>
                                </div>
                                <div className={cx('gender-input-item')}>
                                    <input type="radio" name="check" />
                                    <label>Male</label>
                                </div>
                                <div className={cx('gender-input-item')}>
                                    <input type="radio" name="check" />
                                    <label>Others</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('register-container')}></div>
                    <Button className={cx('register-btn')} register>
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Register;
