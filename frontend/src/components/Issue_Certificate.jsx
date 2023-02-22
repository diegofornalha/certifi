import { React, useEffect, useMyCustomStuff, useState } from 'react';
import { Tooltip, ResponsiveContainer } from 'recharts';
import Stepper from "react-stepper-horizontal";


const Issue_Certificate = () => {

  const [stepper, setStepper] = useState(0);

  return (
    <div className='scrolldiv1'>
      <div className='row '>
        <div className='col-md-12 text-start'>
          <div className=''>
            <div className='row mb-3 align-items-center'>
              <div className='col-md-12'><h4 className="fw-bolder text-black text-uppercase mb-0">Issue Certs</h4></div>
            </div>
          </div>

          <div>
         
            <div className="certsteps mb-3">
              
            <Stepper steps={[
              { title: 'Select students', className: 'certsteps' },
              { title: 'Certification info', className: 'certsteps' },
              { title: 'Select template', className: 'certsteps' },
              { title: 'Customize template', className: 'certsteps' },
              { title: 'Preview', className: 'certsteps' },
              { title: 'Signers', className: 'certsteps' }
            ]} activeStep={stepper} />
</div>
            {stepper === 0 &&
              <div>
                <div className='formscroldiv'>
                  <div className='searchform border-none mt-3'>
                    <div className='fields txtfields'>Cert batch name</div>
                    <div className='fields'>
                      <select className='form-control'>
                        <option>2022-Computer-Science-Graduation - List 1</option>
                      </select>
                    </div>
                    <div className='fields'></div>
                  </div>

                  <div className='tableblur mt-4'>
                    <div className='searchform'>
                      <div className='fields'>Search & Filters</div>
                      <div className='fields'><input type={'text'} className="form-control" placeholder='Name' /></div>
                      <div className='fields'><input type={'text'} className="form-control" placeholder='Batch year' /></div>
                      <div className='fields'><input type={'text'} className="form-control" placeholder='Student ID/Email' /></div>
                      <div className='fields'>
                        <select className="form-control">
                          <option selected>Import slot</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>

                      </div>
                    </div>
                    <div className='table-responsive'>
                      <table className="table align-middle mb-0 custable table-hover" >
                        <thead className="">
                          <tr>
                            <th>
                              <div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck1" /><label className="form-check-label" for="exampleCheck1"></label></div>
                            </th>
                            <th>Student ID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Batch</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck2" /><label className="form-check-label" for="exampleCheck2"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                1
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">anderson@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Anderson</p>
                            </td>
                            <td> 2022 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>

                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck3" /><label className="form-check-label" for="exampleCheck3"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                2
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">adam@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Adam</p>
                            </td>
                            <td> 2021 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck4" /><label className="form-check-label" for="exampleCheck4"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                3
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">sean@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Sean</p>
                            </td>
                            <td> 2020 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck5" /><label className="form-check-label" for="exampleCheck5"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                4
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">taylor@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Taylor</p>
                            </td>
                            <td> 2019 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck6" /><label className="form-check-label" for="exampleCheck6"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                5
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">anderson@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Anderson</p>
                            </td>
                            <td> 2022 </td>
                            <td>
                              <span className="text-danger">Decline</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                <div className='row align-items-center'>
                  <div className='col-3'></div>
                  <div className='col-6 text-center'>Totally <span className='fw-bold'>125</span> students seclected</div>
                  <div className='col-3 text-end'>
                    <div className='btngrouprht'>
                      <button className='btn btn-primary btn-icon icon-rht' onClick={() => setStepper(stepper + 1)}>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></button>
                    </div>
                  </div>
                </div>

              </div>
            }
            {stepper === 1 &&
              <div>
                <div className='formscroldiv'>
                  <div className='backgroundblur text-start p-15px mt-3'>
                    <div className='createcertform'>
                      <div className='row'>
                        <div className='col-md-4 offset-md-4'>
                          <div className='form-group'>
                            <label className='mb-2'>Course</label>
                            <input type={'text'} className="form-control" placeholder='Course' />
                          </div>
                        
                          <div className='form-group'>
                            <label className='mb-2'>Grade</label>
                            <input type={'text'} className="form-control" placeholder='Grade' />
                          </div>
                        
                          <div className='form-group'>
                            <label className='mb-2'>Batch</label>
                            <input type={'text'} className="form-control" placeholder='Batch' />
                          </div>
                        
                          <div className='form-group'>
                            <label className='mb-2'>Certificate Number</label>
                            <input type={'text'} className="form-control" placeholder='Certificate Number' />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='certinfo'>
                      <p>Upload a CSV/XLS file with student ID & their certification info</p>
                      <div className='certinfocont'>
                        <p>Course</p>
                        <p>Grade</p>
                        <p>Batch</p>
                        <p>Certificate Number</p>
                      </div>
                      <h3>Download CSV File</h3>

                      <div className='form-group'>
                        <label for="file-upload" class="custom-file-upload btn btn-primary btn-icon icon-rht">Upload File <i data-eva-animation="flip" data-eva="upload-outline"></i></label>
                        <input id="file-upload" type="file" />
                      </div>

                      <p className='text-secondary'>CSV, XLS only - Maximum 10000 records</p>
                    </div> */}
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className='col-6'>
                    <div className='btngrouprht'>
                      <button className='btn btn-light btn-icon' onClick={() => setStepper(stepper - 1)}>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</button>
                    </div>
                  </div>
                  <div className='col-6 text-end'>
                    <div className='btngrouprht'>
                      <button className='btn btn-primary btn-icon icon-rht' onClick={() => setStepper(stepper + 1)}>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            }
            {stepper === 2 &&
              <div>
                <div className='formscroldiv'>
                  {/* <div className='certempfrm'>
                    <div className='row'>
                      <div className='col-md-6 text-center'>
                        <div className='backgroundblur mb-3'>
                          <div className='certinfo'>
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                            </div>
                          </div>
                        </div>
                        <p>Graduation Certificate Layout</p>
                        <button className='btn btn-light'>Random Preview</button>

                      </div>

                      <div className='col-md-6 text-center'>
                        <div className='backgroundblur mb-3'>
                          <div className='certinfo'>
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                            </div>
                          </div>
                        </div>
                        <p>Course certificate 2</p>
                        <button className='btn btn-light'>Random Preview</button>

                      </div>
                    </div>

                  </div> */}
                  <div className='certtemplates mt-3'>
                    <div className='row'>
                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp' >
                          <input type={'radio'} id="certselect-1" name='cerselect' />
                          <label className='backgroundblur' for="certselect-1">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp dis-bfore' >
                          <input type={'radio'} id="certselect-2" name='cerselect' />
                          <label className='backgroundblur' for="certselect-2">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert2.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp dis-bfore' >
                          <input type={'radio'} id="certselect-3" name='cerselect' />
                          <label className='backgroundblur' for="certselect-3">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert3.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp dis-bfore' >
                          <input type={'radio'} id="certselect-4" name='cerselect' />
                          <label className='backgroundblur' for="certselect-4">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert4.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp dis-bfore' >
                          <input type={'radio'} id="certselect-5" name='cerselect' />
                          <label className='backgroundblur' for="certselect-5">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert5.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp dis-bfore' >
                          <input type={'radio'} id="certselect-6" name='cerselect' />
                          <label className='backgroundblur' for="certselect-6">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert6.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp dis-bfore' >
                          <input type={'radio'} id="certselect-7" name='cerselect' />
                          <label className='backgroundblur' for="certselect-7">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert7.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-3">
                        <div className='ctemp dis-bfore' >
                          <input type={'radio'} id="certselect-8" name='cerselect' />
                          <label className='backgroundblur' for="certselect-8">
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert8.png')} loading="lazy" />
                            </div>
                            <div className='cername'>Course certificate</div>
                          </label>
                        </div>
                      </div>


                    </div>
                  </div>

                </div>
                <div className='row align-items-center'>
                  <div className='col-6'>
                    <div className='btngrouprht'>
                      <button className='btn btn-light btn-icon' onClick={() => setStepper(stepper - 1)}>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</button>
                    </div>
                  </div>
                  <div className='col-6 text-end'>
                    <div className='btngrouprht'>
                      <button className='btn btn-primary btn-icon icon-rht' onClick={() => setStepper(stepper + 1)}>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            }
            {stepper === 3 &&
              <div>
              <div className='formscroldiv'>
              <div className='createcertform backgroundblur text-start p-15px my-3'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <label className='mb-2'>Title</label>
                    <input type={'text'} className="form-control" placeholder='Title' />
                  </div>
                  <div className='row'>
                    <div className='col-md-8'>
                      <div className='form-group'>
                        <div class="input-group has-validation">
                          <span class="input-group-text">T</span>
                          <select class="form-control">
                            <option>Select font</option>
                            <option value="1">Verdana</option>
                            <option value="2">Times New Roman</option>
                            <option value="3">Open Sans</option>
                          </select>

                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='form-group'>
                        <div class="input-group has-validation">
                          <select class="form-control">
                            <option>Font Size</option>
                            <option value="1">8px</option>
                            <option value="2">9px</option>
                            <option value="3">10px</option>
                          </select>

                        </div>
                      </div>

                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <div class="btn-toolbar mb-3 form-control" role="toolbar" aria-label="Toolbar with button groups">
                          <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-outline-secondary bold">B</button>
                            <button type="button" class="btn btn-outline-secondary italic">I</button>
                            <button type="button" class="btn btn-outline-secondary underline">U</button>
                            <button type="button" class="btn btn-outline-secondary linethrough">S</button>
                          </div>

                        </div>

                      </div>
                    </div>
                    <div className='col-md-2'>
                      <span className='pickclr' style={{ backgroundColor: '#005FFF' }}></span>
                    </div>
                    <div className='col-md-4'>
                      <div className='form-group'>
                        <input type={'text'} className="form-control" placeholder='#005FFF' />
                      </div>

                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <label className='mb-2'>Upload background picture</label>
                    <label for="file-upload" class="custom-file-upload form-control">Upload background picture <i data-eva-animation="flip" data-eva="upload-outline"></i></label>
                    <input id="file-upload" type="file" />
                  </div>
                  <div className='form-group'>
                    <div className='imgpreviewbox'>
                      <i data-eva-animation="flip" data-eva="image-outline"></i>
                      <p>Background picture</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <label className='mb-2'>Upload design picture</label>
                    <label for="file-upload" class="custom-file-upload form-control">Upload design picture <i data-eva-animation="flip" data-eva="upload-outline"></i></label>
                    <input id="file-upload" type="file" />
                  </div>
                  <div className='form-group'>
                    <div className='imgpreviewbox'>
                      <i data-eva-animation="flip" data-eva="image-outline"></i>
                      <p>Design picture</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-12'>
                  <div className='form-group'>
                    <div className='imgpreviewbox draganddrop'>
                      <i data-eva-animation="flip" data-eva="image-outline"></i>
                      <p>Drag drop interface to drag uploaded design pictures above</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-12'>
                  <div className='form-group'>
                    <h4 className='formsubhead'>Manage signature</h4>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='form-group'>
                    <label className='mb-2'>Upload cancellor signature</label>
                    <label for="file-upload" class="custom-file-upload form-control">Upload cancellor signature <i data-eva-animation="flip" data-eva="upload-outline"></i></label>
                    <input id="file-upload" type="file" />
                  </div>
                  <div className='form-group'>
                    <div className='imgpreviewbox'>
                      <i data-eva-animation="flip" data-eva="image-outline"></i>
                      <p>Cancellor signature</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='form-group'>
                    <label className='mb-2'>Upload register signature</label>
                    <label for="file-upload" class="custom-file-upload form-control">Upload register signature <i data-eva-animation="flip" data-eva="upload-outline"></i></label>
                    <input id="file-upload" type="file" />
                  </div>
                  <div className='form-group'>
                    <div className='imgpreviewbox'>
                      <i data-eva-animation="flip" data-eva="image-outline"></i>
                      <p>Register signature</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='form-group'>
                    <label className='mb-2'>Upload president signature</label>
                    <label for="file-upload" class="custom-file-upload form-control">Upload president signature <i data-eva-animation="flip" data-eva="upload-outline"></i></label>
                    <input id="file-upload" type="file" />
                  </div>
                  <div className='form-group'>
                    <div className='imgpreviewbox'>
                      <i data-eva-animation="flip" data-eva="image-outline"></i>
                      <p>President signature</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-12'>
                  <div className='form-group'>
                    <h4 className='formsubhead'>Manage Parameters</h4>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='form-group'>
                    <input type={'text'} className="form-control" placeholder='{Certificate number}' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <input type={'text'} className="form-control" placeholder='{First Name}' />
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='form-group'>
                    <input type={'text'} className="form-control" placeholder='{Last Name}' />
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='form-group'>
                    <input type={'text'} className="form-control" placeholder='{Course}' />
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='form-group'>
                    <input type={'text'} className="form-control" placeholder='{grade}' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <input type={'text'} className="form-control" placeholder='{batch}' />
                  </div>
                </div>

               
              </div>
            </div>
            </div>
            <div className='row align-items-center'>
                  <div className='col-6'>
                    <div className='btngrouprht'>
                      <button className='btn btn-light btn-icon' onClick={() => setStepper(stepper - 1)}>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</button>
                    </div>
                  </div>
                  <div className='col-6 text-end'>
                    <div className='btngrouprht'>
                      <button className='btn btn-primary btn-icon icon-rht' onClick={() => setStepper(stepper + 1)}>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            }

            {stepper === 4 &&
              <div>
                <div className='formscroldiv'>
                  {/* <div className='backgroundblur text-center mh-auto'>
                    <div className='certinfo certpreview'>
                      <div className='img'>
                        <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                      </div>
                    </div>
                  </div>

                  <div className='certprecontbtn'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='cpbtnlinks'>
                          <a href='' className='text-dark'><i data-eva="arrowhead-left-outline"></i> PREVIOUS</a>

                        <a href='' className='btn btn-light text-primary'>John Smith<br/>#12347</a></div>
                      </div>
                      <div className='col-md-4 text-center'>
                        <h5 className='text-primary'>Laura Wheeler</h5>
                        <p>#12455</p>
                      </div>  
                       <div className='col-md-4 '>
                        <div className='cpbtnlinks align-items-end'>
                          <a href='' className='text-dark'>Next <i data-eva="arrowhead-right-outline"></i></a>
                          
                        <a href='' className='btn btn-light text-primary'>Adam Smith<br/>#12347</a></div>
                      </div>
                    </div>
                  </div>  */}

                  <div class="accordion listview" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className='listviewtxts'>
                            <span className='studid'>#12455</span>
                            <span className='studname'>Laura Wheeler</span>
                            <span className='studbetch'>2022</span>
                            <span className='studdep'>Computer science</span>
                          </span>

                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                        <div class="accordion-body text-center">
                          <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                        </div>
                      </div>
                    </div>
                    {/* <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className='listviewtxts'>
                            <span className='studid'>#12455</span>
                            <span className='studname'>Laura Wheeler</span>
                            <span className='studbetch'>2022</span>
                            <span className='studdep'>Computer science</span>
                          </span>

                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                        <div class="accordion-body text-center">
                          <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className='listviewtxts'>
                            <span className='studid'>#12455</span>
                            <span className='studname'>Laura Wheeler</span>
                            <span className='studbetch'>2022</span>
                            <span className='studdep'>Computer science</span>
                          </span>

                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                        <div class="accordion-body text-center">
                          <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                        </div>
                      </div>
                    </div> */}
                  </div>

                </div>

                <div className='row align-items-center'>
                  <div className='col-4'>
                    <div className='btngrouprht'>
                      <button className='btn btn-light btn-icon' onClick={() => setStepper(stepper - 1)}>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</button>
                    </div>
                  </div>
                  <div className='col-4 text-center'>You will be prompted to initiate your blockchain signature in next step</div>
                  <div className='col-4 text-end'>
                    <div className='btngrouprht'>
                      <button className='btn btn-primary btn-icon icon-rht' onClick={() => setStepper(stepper + 1)}>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            }
             {stepper === 5 &&
             <div>
                <div className='formscroldiv'>
                  <div className='backgroundblur text-start mt-3'>
                    <div className='certinfo'>                      
                      <div className='certinfocont1'>
                        <p>2022 - Computer Science Graduation - List 1</p>
                        <p>Total Students - 124</p>
                        <p>Download records for final verification</p>                       
                      </div>                      
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-4'>
                     <div className='backgroundblur text-center'>
                      <div className='signerboxes'>
                        <h6>Preparer Sign</h6>
                        <button type="button" class="btn btn-primary btn-icon icon-rht btn-abs btn-disabled" >Signed <i data-eva="checkmark-outline"></i></button>
                        <p>On JUL-17-2022 11:01 EST</p>
                        <p>By  Prof Charles Harper</p>
                      </div>
                     </div>
                    </div>

                    <div className='col-md-4'>
                     <div className='backgroundblur text-center'>
                      <div className='signerboxes'>
                        <h6>Verifier Sign</h6>
                        <button type="button" class="btn btn-primary btn-icon icon-rht btn-abs btn-disabled">Signed <i data-eva="checkmark-outline"></i></button>
                        <p>On JUL-17-2022 11:01 EST</p>
                        <p>By  Prof Charles Harper</p>
                      </div>
                     </div>
                    </div>

                    <div className='col-md-4'>
                     <div className='backgroundblur text-center'>
                      <div className='signerboxes'>
                        <h6>Issuer Sign</h6>
                        <button type="button" class="btn btn-light text-primary">Sign</button>                       
                        <button type="button" class="btn btn-danger">Reject</button>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>

                <div className='row align-items-center'>
                  <div className='col-4'>
                    <div className='btngrouprht'>
                      <button className='btn btn-light btn-icon' onClick={() => setStepper(stepper - 1)}>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</button>
                    </div>
                  </div>
                  <div className='col-4 text-center'>You will be prompted to initiate your blockchain signature in next step</div>
                  <div className='col-4 text-end'>
                    <div className='btngrouprht'>
                      <button className='btn btn-primary btn-icon icon-rht'>Finish < i data-eva-animation="flip" data-eva="check-outline"></i></button>
                    </div>
                  </div>
                </div>
             </div>
             }
          </div>
          {/* <div className='issuecerttabs'>

            <ul className="nav nav-pills mb-3 justify-content-center" id="ex1" role="tablist">
              <li className="nav-item" role="presentation"><a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Select students <i data-eva="checkmark-outline"></i></a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Certification info</a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Cert template</a></li>
              <li className="nav-item" role="presentation"><a className="nav-link" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Preview</a></li>
            </ul>

            <div className="tab-content" id="ex1-content">
              <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                <div className='formscroldiv'>
                  <div className='searchform border-none'>
                    <div className='fields txtfields'>Cert batch name</div>
                    <div className='fields'>
                      <select className='form-control'>
                        <option>2022-Computer-Science-Graduation - List 1</option>
                      </select>
                    </div>
                    <div className='fields'></div>
                  </div>

                  <div className='tableblur mt-4'>
                    <div className='searchform'>
                      <div className='fields'>Search & Filters</div>
                      <div className='fields'><input type={'text'} className="form-control" placeholder='Name' /></div>
                      <div className='fields'><input type={'text'} className="form-control" placeholder='Batch year' /></div>
                      <div className='fields'><input type={'text'} className="form-control" placeholder='Student ID/Email' /></div>
                      <div className='fields'>
                        <select className="form-control">
                          <option selected>Import slot</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>

                      </div>
                    </div>
                    <div className='table-responsive'>
                      <table className="table align-middle mb-0 custable table-hover" >
                        <thead className="">
                          <tr>
                            <th>
                              <div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck1" /><label className="form-check-label" for="exampleCheck1"></label></div>
                            </th>
                            <th>Student ID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Batch</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck2" /><label className="form-check-label" for="exampleCheck2"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                1
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">anderson@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Anderson</p>
                            </td>
                            <td> 2022 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>

                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck3" /><label className="form-check-label" for="exampleCheck3"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                2
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">adam@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Adam</p>
                            </td>
                            <td> 2021 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck4" /><label className="form-check-label" for="exampleCheck4"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                3
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">sean@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Sean</p>
                            </td>
                            <td> 2020 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck5" /><label className="form-check-label" for="exampleCheck5"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                4
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">taylor@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Taylor</p>
                            </td>
                            <td> 2019 </td>
                            <td>
                              <span className="text-success">Approved</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="form-group"><input type="checkbox" className="form-check-input" id="exampleCheck6" /><label className="form-check-label" for="exampleCheck6"></label></div></td>
                            <td>
                              <div className="d-flex align-items-center">
                                5
                              </div>
                            </td>
                            <td>
                              <span className="text-dark">anderson@gmail.com</span>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">Anderson</p>
                            </td>
                            <td> 2022 </td>
                            <td>
                              <span className="text-danger">Decline</span>
                            </td>
                            <td className='text-center'>
                              <div className='btngrouprht'>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="edit-outline"></i></a>
                                <a href="" className='btn btn-outline-primary text-primary btn-sm btn-action'>< i data-eva-animation="flip" data-eva="trash-2-outline"></i></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                <div className='row align-items-center'>
                  <div className='col-3'></div>
                  <div className='col-6 text-center'>Totally <span className='fw-bold'>125</span> students seclected</div>
                  <div className='col-3 text-end'>
                    <div className='btngrouprht'>
                      <a href='' className='btn btn-primary btn-icon icon-rht'>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="tab-pane fade" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">

                <div className='formscroldiv'>
                  <div className='backgroundblur text-center'>
                    <div className='certinfo'>
                      <p>Upload a CSV/XLS file with student ID & their certification info</p>
                      <div className='certinfocont'>
                        <p>Course</p>
                        <p>Grade</p>
                        <p>Batch</p>
                        <p>Certificate Number</p>
                      </div>
                      <h3>Download CSV File</h3>

                      <div className='form-group'>
                        <label for="file-upload" class="custom-file-upload btn btn-primary btn-icon icon-rht">Upload File <i data-eva-animation="flip" data-eva="upload-outline"></i></label>
                        <input id="file-upload" type="file" />
                      </div>

                      <p className='text-secondary'>CSV, XLS only - Maximum 10000 records</p>
                    </div>
                  </div>
                </div>
                <div className='row align-items-center'>
                  <div className='col-6'>
                    <div className='btngrouprht'>
                      <a href='' className='btn btn-light btn-icon'>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</a>
                    </div>
                  </div>
                  <div className='col-6 text-end'>
                    <div className='btngrouprht'>
                      <a href='' className='btn btn-primary btn-icon icon-rht'>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="tab-pane fade" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                <div className='formscroldiv'>
                  <div className='certempfrm'>
                    <div className='row'>
                      <div className='col-md-6 text-center'>
                        <div className='backgroundblur mb-3'>
                          <div className='certinfo'>
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                            </div>
                          </div>
                        </div>
                        <p>Graduation Certificate Layout</p>
                        <button className='btn btn-light'>Random Preview</button>

                      </div>

                      <div className='col-md-6 text-center'>
                        <div className='backgroundblur mb-3'>
                          <div className='certinfo'>
                            <div className='img'>
                              <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                            </div>
                          </div>
                        </div>
                        <p>Course certificate 2</p>
                        <button className='btn btn-light'>Random Preview</button>

                      </div>
                    </div>

                  </div>

                </div>
                <div className='row align-items-center'>
                  <div className='col-6'>
                    <div className='btngrouprht'>
                      <a href='' className='btn btn-light btn-icon'>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</a>
                    </div>
                  </div>
                  <div className='col-6 text-end'>
                    <div className='btngrouprht'>
                      <a href='' className='btn btn-primary btn-icon icon-rht'>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-3">
                <div className='btngrouprht text-end mb-3'>
                  <button className='btn btn-primary text-primary btn-sm btn-action' data-mdb-toggle="tooltip" title="Cert View" data-mdb-placement="bottom">< i data-eva-animation="flip" data-eva="award-outline"></i></button>
                  <button className='btn btn-outline-primary text-primary btn-sm btn-action' data-mdb-toggle="tooltip" title="List View" data-mdb-placement="bottom">< i data-eva-animation="flip" data-eva="menu-outline"></i></button>
                </div>

                <div className='formscroldiv'>
                  <div className='backgroundblur text-center mh-auto'>
                    <div className='certinfo certpreview'>
                      <div className='img'>
                        <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                      </div>
                    </div>
                  </div>

                  <div className='certprecontbtn'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='cpbtnlinks'>
                          <a href='' className='text-dark'><i data-eva="arrowhead-left-outline"></i> PREVIOUS</a>

                        <a href='' className='btn btn-light text-primary'>John Smith<br/>#12347</a></div>
                      </div>
                      <div className='col-md-4 text-center'>
                        <h5 className='text-primary'>Laura Wheeler</h5>
                        <p>#12455</p>
                      </div>  
                       <div className='col-md-4 '>
                        <div className='cpbtnlinks align-items-end'>
                          <a href='' className='text-dark'>Next <i data-eva="arrowhead-right-outline"></i></a>
                          
                        <a href='' className='btn btn-light text-primary'>Adam Smith<br/>#12347</a></div>
                      </div>
                    </div>
                  </div> 

                  <div class="accordion listview" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className='listviewtxts'>  
                            <span className='studid'>#12455</span>                          
                            <span className='studname'>Laura Wheeler</span>                          
                            <span className='studbetch'>2022</span>                          
                            <span className='studdep'>Computer science</span>                          
                          </span>
                          
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                        <div class="accordion-body text-center">
                        <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className='listviewtxts'>  
                            <span className='studid'>#12455</span>                          
                            <span className='studname'>Laura Wheeler</span>                          
                            <span className='studbetch'>2022</span>                          
                            <span className='studdep'>Computer science</span>                          
                          </span>
                          
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                      <div class="accordion-body text-center">
                        <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className='listviewtxts'>  
                            <span className='studid'>#12455</span>                          
                            <span className='studname'>Laura Wheeler</span>                          
                            <span className='studbetch'>2022</span>                          
                            <span className='studdep'>Computer science</span>                          
                          </span>
                          
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                      <div class="accordion-body text-center">
                        <img src={require('../assets/images/cert/cert1.png')} loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className='row align-items-center'>
                  <div className='col-4'>
                    <div className='btngrouprht'>
                      <a href='' className='btn btn-light btn-icon'>< i data-eva-animation="flip" data-eva="arrow-back-outline"></i> Back</a>
                    </div>
                  </div>
                  <div className='col-4 text-center'>You will be prompted to initiate your blockchain signature in next step</div>
                  <div className='col-4 text-end'>
                    <div className='btngrouprht'>
                      <a href='' className='btn btn-primary btn-icon icon-rht'>Continue < i data-eva-animation="flip" data-eva="arrow-forward-outline"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div> */}
        </div>

      </div>
    </div>

  );
}

export default Issue_Certificate;