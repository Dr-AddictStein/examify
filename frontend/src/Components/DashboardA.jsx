
const DashboardA = () => {
    return (
        <div className="bg-[#bde3ff] h-[100vh] grid grid-cols-2 text-3xl gap-16 p-56">
            <div className="bg-[#e4ccff] flex justify-center items-center">
                <h4>Exam taken (this month): 231</h4>
            </div>
            <div className="bg-[#e4ccff] flex justify-center items-center p-2 text-center">
                <h4>Payment Received (this month): Rs 231</h4>
            </div>
            <div className="bg-[#e4ccff] flex justify-center items-center p-2 text-center">
                <h4>Total Active Exams: 231</h4>
            </div>
            <div className="bg-[#e4ccff] flex justify-center items-center p-2 text-center">
                <h4>Total Active Users : 231</h4>
            </div>
        </div>
    );
};

export default DashboardA;