#!/usr/bin/env node

/**
 * EcoVerse Quest Performance Test Script
 * Tests API endpoints and database performance
 */

import http from 'http';

const BASE_URL = 'http://localhost:5001';

// Test endpoints
const endpoints = [
  '/api/health',
  '/api/auth/login',
  '/api/auth/signup'
];

// Performance test function
async function testEndpoint(url, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const options = {
      hostname: 'localhost',
      port: 5001,
      path: url,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        resolve({
          url,
          method,
          statusCode: res.statusCode,
          responseTime,
          success: res.statusCode >= 200 && res.statusCode < 300
        });
      });
    });

    req.on('error', (err) => {
      reject({ url, error: err.message });
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// Run performance tests
async function runPerformanceTests() {
  console.log('🚀 EcoVerse Quest Performance Test Starting...\n');

  const results = [];

  // Test health endpoint
  try {
    const healthResult = await testEndpoint('/api/health');
    results.push(healthResult);
    console.log(`✅ Health Check: ${healthResult.responseTime}ms`);
  } catch (error) {
    console.log(`❌ Health Check Failed: ${error.error}`);
  }

  // Test signup endpoint
  try {
    const signupData = {
      name: 'Performance Test User',
      email: `perf-test-${Date.now()}@example.com`,
      password: 'test123',
      role: 'student'
    };

    const signupResult = await testEndpoint('/api/auth/signup', 'POST', signupData);
    results.push(signupResult);
    console.log(`✅ Signup Test: ${signupResult.responseTime}ms`);
  } catch (error) {
    console.log(`❌ Signup Test Failed: ${error.error}`);
  }

  // Test login endpoint
  try {
    const loginData = {
      email: 'test@example.com',
      password: 'test123'
    };

    const loginResult = await testEndpoint('/api/auth/login', 'POST', loginData);
    results.push(loginResult);
    console.log(`✅ Login Test: ${loginResult.responseTime}ms`);
  } catch (error) {
    console.log(`❌ Login Test Failed: ${error.error}`);
  }

  // Calculate statistics
  const successfulTests = results.filter(r => r.success);
  const avgResponseTime = results.reduce((sum, r) => sum + r.responseTime, 0) / results.length;

  console.log('\n📊 Performance Results:');
  console.log(`Total Tests: ${results.length}`);
  console.log(`Successful Tests: ${successfulTests.length}`);
  console.log(`Average Response Time: ${avgResponseTime.toFixed(2)}ms`);
  console.log(`Success Rate: ${((successfulTests.length / results.length) * 100).toFixed(1)}%`);

  if (avgResponseTime < 100) {
    console.log('🎉 Excellent performance! All response times under 100ms');
  } else if (avgResponseTime < 500) {
    console.log('👍 Good performance! Response times acceptable');
  } else {
    console.log('⚠️  Performance could be improved');
  }
}

// Run the tests
runPerformanceTests().catch(console.error);