import { CircleCheck } from "lucide-react";
import Image from "next/image";

export default function SectionThree(){
    return(
        <div className="w-full bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_30%,#C7EAF6_100%)] pb-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-18">
            <div className="mt-10 lg:mt-18 w-full lg:w-[495px]">
              <Image
                src="/date.png"
                alt="date"
                width={50}
                height={1}
                className="mb-2"
              />
              <h1 className="text-[15px] font-[600] text-[#424242]">
                Drag & Drop Calendar
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575] mt-3">
                Visually organize your classes with an intuitive drag-and-drop
                interface that makes scheduling effortless.
              </h1>
              <div className="flex flex-row gap-3 mt-5 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Multi-view calendar</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Color coding</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Quick duplication</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Template library</h1>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-5 lg:mt-10">
              <Image
                src="/dash6.png"
                alt="dashboard"
                width={500}
                height={1}
                className="w-full max-w-[500px] sm:max-w-none"
              />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-18">
            <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-5 lg:mt-10">
              <Image
                src="/dash7.png"
                alt="dashboard"
                width={500}
                height={1}
                className="w-full max-w-[500px] sm:max-w-none"
              />
            </div>
            <div className="mt-10 lg:mt-15 w-full lg:w-[495px]">
              <Image
                src="/recur.png"
                alt="recur"
                width={50}
                height={1}
                className="mb-2"
              />
              <h1 className="text-[15px] font-[600] text-[#424242]">
                Recurring Classes
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575] mt-3">
                Set up recurring class schedules once and let the system
                automatically create future sessions.
              </h1>
              <div className="flex flex-row gap-3 mt-5 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">
                  Flexible recurrence rules
                </h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Exception handling</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Batch editing</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Holiday management</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-18">
            <div className="mt-10 lg:mt-18 w-full lg:w-[495px]">
              <Image
                src="/savetime.png"
                alt="date"
                width={50}
                height={1}
                className="mb-2"
              />
              <h1 className="text-[15px] font-[600] text-[#424242]">
                Waitlist Automation
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575] mt-3">
                Automatically fill canceled spots from your waitlist with smart
                priority-based enrollment.
              </h1>
              <div className="flex flex-row gap-3 mt-5 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Priority rankings</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Auto-notifications</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Capacity tracking</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Fair allocation</h1>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-5 lg:mt-10">
              <Image
                src="/dash8.png"
                alt="dashboard"
                width={500}
                height={1}
                className="w-full max-w-[500px] sm:max-w-none"
              />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-18">
            <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-5 lg:mt-10">
              <Image
                src="/dash9.png"
                alt="dashboard"
                width={500}
                height={1}
                className="w-full max-w-[500px] sm:max-w-none"
              />
            </div>
            <div className="mt-10 lg:mt-15 w-full lg:w-[495px]">
              <Image
                src="/people.png"
                alt="recur"
                width={50}
                height={1}
                className="mb-2"
              />
              <h1 className="text-[15px] font-[600] text-[#424242]">
                Capacity Management
              </h1>
              <h1 className="text-[12px] font-[400] text-[#757575] mt-3">
                Set minimum and maximum capacity limits with automatic
                notifications when thresholds are reached.
              </h1>
              <div className="flex flex-row gap-3 mt-5 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Min/max limits</h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">
                  Real-time availability
                </h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">
                  Overbooking prevention
                </h1>
              </div>
              <div className="flex flex-row gap-3 mt-3 text-[#757575]">
                <CircleCheck size={20} className="text-[#10B4D4]" />
                <h1 className="text-[12px] font-[400]">Capacity alerts</h1>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-15 px-4 sm:px-6">
            <h1 className="text-[32px] font-[600] text-[#424242] text-center mb-8">
              Insights For Your Business
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mx-6 gap-4">
              <div className="bg-white rounded-[16px] shadow-lg px-3 w-full h-70 flex flex-col">
                <Image
                  src="/stripe.png"
                  alt="stripe"
                  width={50}
                  height={1}
                  className="mb-2 h-12.5 mt-5 ml-2"
                />
                <h1 className="text-[15px] font-[600] text-[#424242] ml-2 mb-2">
                  Stripe Integration
                </h1>
                <h1 className="text-[12px] font-[400] text-[#757575] ml-2">
                  Industry-leading payment processing with support for all major
                  payment methods.
                </h1>
                <div className="flex flex-row gap-3 mt-3 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Min/max limits</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">
                    Real-time availability
                  </h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">
                    Overbooking prevention
                  </h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Capacity alerts</h1>
                </div>
              </div>
              <div className="bg-white rounded-[16px] shadow-lg px-3 w-full h-70 flex flex-col">
                <Image
                  src="/document.png"
                  alt="document"
                  width={50}
                  height={1}
                  className="mb-2 h-12.5 mt-5 ml-2"
                />
                <h1 className="text-[15px] font-[600] text-[#424242] ml-2 mb-2">
                  Automated Invoicing
                </h1>
                <h1 className="text-[12px] font-[400] text-[#757575] ml-2">
                  Professional invoices generated and sent automatically with
                  payment tracking.
                </h1>
                <div className="flex flex-row gap-3 mt-3 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">
                    Custom invoice templates
                  </h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">
                    Automatic payment reminders
                  </h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Tax compliance</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Payment history</h1>
                </div>
              </div>
              <div className="bg-white rounded-[16px] shadow-lg px-3 w-full h-70 flex flex-col">
                <Image
                  src="/stonks.png"
                  alt="stonks"
                  width={50}
                  height={1}
                  className="mb-2 h-12.5 mt-5 ml-2"
                />
                <h1 className="text-[15px] font-[600] text-[#424242] ml-2 mb-2">
                  Revenue Analytics
                </h1>
                <h1 className="text-[12px] font-[400] text-[#757575] ml-2">
                  Comprehensive financial reporting and revenue forecasting
                  tools.
                </h1>
                <div className="flex flex-row gap-3 mt-3 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">
                    Real-time revenue tracking
                  </h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">
                    Subscription analytics
                  </h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Refund management</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Tax reporting</h1>
                </div>
              </div>
              <div className="bg-white rounded-[16px] shadow-lg px-3 w-full h-70 flex flex-col">
                <Image
                  src="/business.png"
                  alt="business"
                  width={50}
                  height={1}
                  className="mb-2 h-12.5 mt-5 ml-2"
                />
                <h1 className="text-[15px] font-[600] text-[#424242] ml-2 mb-2">
                  Business Analytics
                </h1>
                <h1 className="text-[12px] font-[400] text-[#757575] ml-2">
                  Comprehensive dashboard with key performance indicators and
                  trends.
                </h1>
                <div className="flex flex-row gap-3 mt-3 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Revenue tracking</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Attendance rates</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Customer retention</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Growth metrics</h1>
                </div>
              </div>
              <div className="bg-white rounded-[16px] shadow-lg px-3 w-full h-70 flex flex-col">
                <Image
                  src="/medal.png"
                  alt="medal"
                  width={50}
                  height={1}
                  className="mb-2 h-12.5 mt-5 ml-2"
                />
                <h1 className="text-[15px] font-[600] text-[#424242] ml-2 mb-2">
                  Student Progress
                </h1>
                <h1 className="text-[12px] font-[400] text-[#757575] ml-2">
                  Track individual student progress and create detailed progress
                  reports.
                </h1>
                <div className="flex flex-row gap-3 mt-3 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Skill assessments</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Progress tracking</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Customer reports</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Parent Dashboards</h1>
                </div>
              </div>
              <div className="bg-white rounded-[16px] shadow-lg px-3 w-full h-70 flex flex-col">
                <Image
                  src="/people.png"
                  alt="people"
                  width={50}
                  height={1}
                  className="mb-2 h-12.5 mt-5 ml-2"
                />
                <h1 className="text-[15px] font-[600] text-[#424242] ml-2 mb-2">
                  Family Insights
                </h1>
                <h1 className="text-[12px] font-[400] text-[#757575] ml-2">
                  Understand family engagement and booking patterns to improve
                  services.
                </h1>
                <div className="flex flex-row gap-3 mt-3 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Engagement metrics</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Booking patterns</h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">
                    Satisfaction surveys
                  </h1>
                </div>
                <div className="flex flex-row gap-3 mt-2 ml-2 text-[#757575]">
                  <CircleCheck size={20} className="text-[#10B4D4]" />
                  <h1 className="text-[12px] font-[400]">Retention analysis</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}