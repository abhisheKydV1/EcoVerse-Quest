# EcoVerse Quest - Testing Documentation

## Testing Setup

This project includes comprehensive testing setup to ensure code quality and reliability. The testing framework uses Jest with Supertest for API testing and MongoDB Memory Server for isolated database testing.

### Test Structure

```
server/
├── tests/
│   ├── User.test.js      # User model tests
│   └── auth.test.js      # Authentication API tests
├── app.js                # Express app for testing (without server startup)
├── jest.config.json      # Jest configuration
└── package.json          # Test scripts
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Coverage

The testing setup includes:

#### User Model Tests (`User.test.js`)
- ✅ User creation with valid data
- ✅ Unique email constraint enforcement
- ✅ Default value assignment
- ✅ Required field validation

#### Authentication API Tests (`auth.test.js`)
- ✅ User signup with validation
- ✅ Duplicate email handling
- ✅ Email format validation
- ✅ Password length validation
- ✅ Successful login
- ✅ Invalid credential handling
- ✅ Non-existent user handling
- ✅ Required field validation

### Testing Technologies

- **Jest**: Testing framework for unit and integration tests
- **Supertest**: HTTP endpoint testing for Express apps
- **MongoDB Memory Server**: In-memory MongoDB for isolated testing
- **ES Modules**: Modern JavaScript module support

### Test Configuration

The `jest.config.json` is configured for:
- ES module support with experimental VM modules
- Module name mapping for clean imports
- Coverage reporting with text, LCOV, and HTML formats
- Test file discovery in the `tests/` directory

### Best Practices Implemented

1. **Isolated Testing**: Each test runs with a fresh in-memory database
2. **Comprehensive Validation**: Tests cover both success and error scenarios
3. **Input Validation**: Tests verify form validation and sanitization
4. **Security Testing**: Password hashing and JWT token validation
5. **Database Constraints**: Unique constraints and required field validation

### Future Test Enhancements

- Frontend component testing with React Testing Library
- End-to-end testing with Playwright or Cypress
- Performance testing for API endpoints
- Integration tests for complex user workflows
- Load testing for scalability validation

This testing setup demonstrates professional development practices suitable for internship applications and production-ready codebases.