const isAuthenticated = true;


<Route path="/reservation" element={isAuthenticated ? <ReservationForm /> : <Navigate to="/login" />} />
