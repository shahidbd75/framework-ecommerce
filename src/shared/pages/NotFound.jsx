const NotFound = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl">404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button className="btn btn-primary my-4" onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default NotFound;